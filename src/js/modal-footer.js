document.addEventListener('DOMContentLoaded', function () {
  const workTogetherModal = document.getElementById('workTogetherModal');
  const workTogetherCloseButton = document.getElementById(
    'workTogetherCloseButton'
  );

  function openWorkTogetherModal() {
    workTogetherModal.style.display = 'block';
    setTimeout(() => {
      workTogetherModal.classList.add('visible');
    }, 10);
  }

  function closeWorkTogetherModal() {
    workTogetherModal.classList.remove('visible');
    setTimeout(() => {
      workTogetherModal.style.display = 'none';
    }, 500);
  }

  function checkFormSubmissionStatus() {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (!savedData) {
      return;
    }

    if (savedData.isSubmitted) {
      openWorkTogetherModal();
      localStorage.removeItem('feedback-form-state');
    }
  }

  // Закрытие модального окна
  workTogetherCloseButton.addEventListener('click', closeWorkTogetherModal);

  window.addEventListener('click', function (event) {
    if (event.target === workTogetherModal) {
      closeWorkTogetherModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (
      event.key === 'Escape' &&
      workTogetherModal.classList.contains('visible')
    ) {
      closeWorkTogetherModal();
    }
  });

  // Проверка состояния формы при загрузке страницы
  checkFormSubmissionStatus();
});
