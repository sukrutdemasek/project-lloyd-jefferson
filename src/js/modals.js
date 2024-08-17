const menuButton = document.getElementById('menuButton');
const headerModal = document.getElementById('headerModal');
const headerCloseButton = document.getElementById('headerCloseButton');

const workTogetherForm = document.getElementById('workTogetherForm');
const workTogetherModal = document.getElementById('workTogetherModal');
const workTogetherCloseButton = document.getElementById(
  'workTogetherCloseButton'
);

// Функция для открытия/закрытия модального окна Header
function toggleHeaderModal() {
  if (headerModal.style.display === 'block') {
    headerModal.classList.remove('show');
    setTimeout(() => {
      headerModal.style.display = 'none';
    }, 500);
  } else {
    headerModal.style.display = 'block';
    setTimeout(() => {
      headerModal.classList.add('show');
    }, 10);
  }
}

// Функция для открытия модального окна Work Together
function openWorkTogetherModal() {
  workTogetherModal.style.display = 'block';
  setTimeout(() => {
    workTogetherModal.classList.add('show');
  }, 10);
}

// Функция для закрытия модального окна Work Together
function closeWorkTogetherModal() {
  workTogetherModal.classList.remove('show');
  setTimeout(() => {
    workTogetherModal.style.display = 'none';
  }, 500);
}

// Открытие/закрытие модального окна Header
menuButton.addEventListener('click', toggleHeaderModal);
headerCloseButton.addEventListener('click', toggleHeaderModal);

// Закрытие модального окна Header при клике вне модального окна
window.addEventListener('click', function (event) {
  if (event.target === headerModal) {
    toggleHeaderModal();
  }
});

// Закрытие модального окна Header при нажатии клавиши Escape
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && headerModal.style.display === 'block') {
    toggleHeaderModal();
  }
});

// Открытие модального окна Work Together при успешной отправке формы
workTogetherForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // Здесь можно добавить проверку отправки формы
  openWorkTogetherModal();
});

// Закрытие модального окна Work Together при клике на крестик
workTogetherCloseButton.addEventListener('click', closeWorkTogetherModal);

// Закрытие модального окна Work Together при клике вне модального окна
window.addEventListener('click', function (event) {
  if (event.target === workTogetherModal) {
    closeWorkTogetherModal();
  }
});

// Закрытие модального окна Work Together при нажатии клавиши Escape
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && workTogetherModal.style.display === 'block') {
    closeWorkTogetherModal();
  }
});
