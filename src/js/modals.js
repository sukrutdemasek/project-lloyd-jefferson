document.addEventListener('DOMContentLoaded', function () {
  //  Управление модальным окном headerModal (меню)

  const menuButton = document.getElementById('menuButton'); // Иконка меню (бургер)
  const headerModal = document.getElementById('headerModal');
  const headerCloseButton = document.getElementById('headerCloseButton');
  const orderButton = document.getElementById('orderButton');

  // Функция для открытия/закрытия модального окна Header
  function toggleHeaderModal() {
    if (headerModal.classList.contains('visible')) {
      headerModal.classList.remove('visible');
      setTimeout(() => {
        headerModal.style.display = 'none';
      }, 500);
    } else {
      headerModal.style.display = 'block';
      setTimeout(() => {
        headerModal.classList.add('visible');
      }, 10);
    }
  }

  // 3. Переход к футеру при нажатии на кнопку Order the project
  orderButton.addEventListener('click', function () {
    document.querySelector('footer').scrollIntoView({ behavior: 'smooth' });
  });

  // 4. Закрытие модального окна Header

  headerCloseButton.addEventListener('click', toggleHeaderModal);

  window.addEventListener('click', function (event) {
    if (event.target === headerModal) {
      toggleHeaderModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && headerModal.classList.contains('visible')) {
      toggleHeaderModal();
    }
  });

  // Открытие модального окна при клике на иконку меню (бургер)
  menuButton.addEventListener('click', toggleHeaderModal);

  // 5. Управление модальным окном Work Together

  const workTogetherForm = document.getElementById('workTogetherForm');
  const workTogetherModal = document.getElementById('workTogetherModal');
  const workTogetherCloseButton = document.getElementById(
    'workTogetherCloseButton'
  );

  // Функция для открытия модального окна Work Together при успешной отправке формы
  function openWorkTogetherModal() {
    workTogetherModal.style.display = 'block';
    setTimeout(() => {
      workTogetherModal.classList.add('visible');
    }, 10);
  }

  // Функция для закрытия модального окна Work Together
  function closeWorkTogetherModal() {
    workTogetherModal.classList.remove('visible');
    setTimeout(() => {
      workTogetherModal.style.display = 'none';
    }, 500);
  }

  // Открытие модального окна Work Together при успешной отправке формы
  workTogetherForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Здесь нужно добавить проверку отправки формы
    openWorkTogetherModal();
  });

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
});
