import iziToast from 'izitoast';

const workTogetherForm = document.querySelector('.coopForm');
let emailInput = document.querySelector('#email');
let commentInput = document.querySelector('#comment');
let validityMessage = document.querySelector('.coopResultMsg');
let modalWindow = document.querySelector('.modal-footer-overlay');
let modalCloseButton = document.querySelector('.modal-footer-close-button');
let body1 = document.body;
const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedData) {
  emailInput.value = savedData.email || '';
  commentInput.value = savedData.comment || '';
}

function handleFocus(input) {
  input.value = input.dataset.fullValue || input.value;
}

function handleBlur(input) {
  if (input.value.length > 36) {
    input.dataset.fullValue = input.value;
    input.value = `${input.value.substring(0, 36)}...`;
  }
}

emailInput.addEventListener('focus', () => handleFocus(emailInput));
emailInput.addEventListener('blur', () => handleBlur(emailInput));
commentInput.addEventListener('focus', () => handleFocus(commentInput));
commentInput.addEventListener('blur', () => handleBlur(commentInput));

emailInput.addEventListener('input', function () {
  if (emailInput.value === '') {
    validityMessage.textContent = '';
    emailInput.style.removeProperty('border-color');
  } else if (emailInput.validity.patternMismatch) {
    validityMessage.textContent = 'Enter your Email correctly.';
    validityMessage.style.color = '#e74a3b';
    emailInput.style.borderColor = '#e74a3b';
  } else {
    validityMessage.textContent = 'Success!';
    validityMessage.style.color = '#3cbc81';
    emailInput.style.borderColor = '#3cbc81';
  }
});

workTogetherForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  handleFocus(emailInput);
  handleFocus(commentInput);

  const emailValue = emailInput.value;
  const commentValue = commentInput.value;

  if (!emailValue || !commentValue) {
    iziToast.error({
      title: 'Error!',
      titleSize: '16',
      titleColor: '#fafafa',
      message: 'Both fields are required.',
      messageSize: '16',
      messageColor: '#fafafa',
      backgroundColor: '#1C1D20',
      theme: 'dark',
      position: 'bottomCenter',
      closeOnEscape: true,
      closeOnClick: true,
    });
    return;
  }

  const formData = {
    email: emailValue,
    comment: commentValue,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));

  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/requests',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      iziToast.error({
        title: 'Error!',
        titleSize: '16',
        titleColor: '#fafafa',
        message: `Request was not delivered`,
        messageSize: '16',
        messageColor: '#fafafa',
        backgroundColor: '#1C1D20',
        theme: 'dark',
        position: 'bottomCenter',
        closeOnEscape: true,
        closeOnClick: true,
      });
    } else {
      body1.classList.add('no-scroll');
      modalWindow.classList.remove('hidden');
      validityMessage.textContent = '';
      emailInput.style.removeProperty('border-color');
      workTogetherForm.reset();
      localStorage.removeItem('feedback-form-state');
    }
  } catch (error) {
    iziToast.error({
      title: 'Error!',
      titleSize: '16',
      titleColor: '#fafafa',
      message: `Request was not delivered`,
      messageSize: '16',
      messageColor: '#fafafa',
      backgroundColor: '#1C1D20',
      theme: 'dark',
      position: 'bottomCenter',
      closeOnEscape: true,
      closeOnClick: true,
    });
  }
});

modalCloseButton.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

modalWindow.addEventListener('click', function (event) {
  if (event.target === modalWindow) {
    closeModal();
  }
});

function closeModal() {
  modalWindow.classList.add('hidden');
  body1.classList.remove('no-scroll');
}

function saveLocalData() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: emailInput.value,
      comment: commentInput.value,
    })
  );
}
