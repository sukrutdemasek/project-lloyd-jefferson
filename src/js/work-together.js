import { PostRequest } from './api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const INPUT_LENGTH_BEFORE_CUT = 36;

const wtGlobalRefs = {
  wtCoopForm: document.querySelector('#wtForm'),
  wtResultMsg: document.querySelector('.coopResultMsg'),
};

wtGlobalRefs.wtCoopForm.addEventListener('submit', sendWtUserData);
wtGlobalRefs.wtCoopForm.elements.email.addEventListener(
  'input',
  resetValidation
);
wtGlobalRefs.wtCoopForm.elements.email.addEventListener('blur', emailValidator);
wtGlobalRefs.wtCoopForm.elements.email.addEventListener('blur', inputCutString);
wtGlobalRefs.wtCoopForm.elements.email.addEventListener(
  'focus',
  inputFullString
);
wtGlobalRefs.wtCoopForm.elements.comment.addEventListener(
  'focus',
  inputFullString
);
wtGlobalRefs.wtCoopForm.elements.comment.addEventListener(
  'blur',
  inputCutString
);

// обробка форми, надсилає пошту та комент на сервер

async function sendWtUserData(e) {
  e.preventDefault();
  try {
    const { email, comment } = wtGlobalRefs.wtCoopForm.elements;
    const data = await PostRequest(email.value, comment.value);
    openWtModal(data);
    wtGlobalRefs.wtCoopForm.reset();
    email.classList.remove('Invalid');
    email.classList.remove('Success');
    wtGlobalRefs.wtResultMsg.textContent = '';
  } catch (err) {
    iziToast.error({
      message: 'Something went wrong! Please, try again.',
      position: 'bottomCenter',
    });
  }
}

//перевіряє введені дані електронної пошти

function emailValidator(e) {
  e.target.value = e.target.value.trim();
  const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!e.target.value) {
    resetValidation(e);
    return;
  }
  if (e.target.value.match(pattern)) {
    showValidationSuccess();
  } else {
    showValidationInvalid();
  }
}

//відображення стилю успіху та повідомлень для введення електронної пошти

function showValidationSuccess() {
  const { email } = wtGlobalRefs.wtCoopForm.elements;
  email.classList.remove('Invalid');
  email.classList.add('Success');
  wtGlobalRefs.wtResultMsg.textContent = 'Success!';
  wtGlobalRefs.wtResultMsg.classList.add('Success');
}

// відображає недійсний стиль і повідомлення для введення електронної пошти

function showValidationInvalid() {
  const { email } = wtGlobalRefs.wtCoopForm.elements;
  email.classList.remove('Success');
  email.classList.add('Invalid');
  wtGlobalRefs.wtResultMsg.textContent = 'Invalid email, try again';
  wtGlobalRefs.wtResultMsg.classList.remove('Success');
}

// скидає повідомлення перевірки та стилі для введення електронної пошти

function resetValidation(e) {
  if (e.target.name === 'email') {
    wtGlobalRefs.wtResultMsg.textContent = '';
    wtGlobalRefs.wtResultMsg.classList.remove('Success');
  }
  const { email } = wtGlobalRefs.wtCoopForm.elements;
  email.classList.remove('Invalid');
  email.classList.remove('Success');
}

// скорочує вхідне значення, якщо воно перевищує вказану довжину

function inputCutString(e) {
  console.log(e.target.value.length);
  e.target.setAttribute('data-value', e.target.value.trim());
  if (e.target.value.length > INPUT_LENGTH_BEFORE_CUT) {
    e.target.value = e.target.value
      .slice(0, INPUT_LENGTH_BEFORE_CUT - 3)
      .concat('...');
  }
}

// відновлює повне введене значення, коли користувач повертається до поля введення

function inputFullString(e) {
  if (e.target.value) e.target.value = e.target.getAttribute('data-value');
}
