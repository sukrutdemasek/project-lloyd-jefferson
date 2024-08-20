import iziToast from 'izitoast';

const workTogetherForm = document.querySelector('.coopForm');
let emailInput = document.querySelector('#email');
let commentInput = document.querySelector('#comment');

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

workTogetherForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  handleFocus(emailInput);
  handleFocus(commentInput);

  const emailValue = emailInput.value;
  const commentValue = commentInput.value;

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
      alert('Success!');
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

function saveLocalData() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: emailInput.value,
      comment: commentInput.value,
    })
  );
}
//refresh commit
