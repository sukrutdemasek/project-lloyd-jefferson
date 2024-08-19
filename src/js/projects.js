import Swiper from 'swiper';
import 'swiper/css';

// Ініціалізація Swiper 
const swiperContainer = document.querySelector('.swiper-projects-container');
const swiper = new Swiper(swiperContainer, {
  direction: 'horizontal',
  loop: false,
  speed: 600,
  spaceBetween: 50,

  pagination: {
    el: '.swiper-projects-container .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-projects-container .swiper-button-next',
    prevEl: '.swiper-projects-container .swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    768: {
      speed: 600,
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1440: {
      speed: 600,
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});

// Отримання інстанції Swiper через HTML елемент
const swiperInstance = swiperContainer.swiper;

// Додавання обробників подій до кнопок навігації
const nextButton = document.querySelector('.swiper-projects-container .swiper-button-next');
const prevButton = document.querySelector('.swiper-projects-container .swiper-button-prev');

function updateNavigationButtons() {
  if (swiperInstance.isEnd) {
    nextButton.classList.add('swiper-button-disabled');
  } else {
    nextButton.classList.remove('swiper-button-disabled');
  }

  if (swiperInstance.isBeginning) {
    prevButton.classList.add('swiper-button-disabled');
  } else {
    prevButton.classList.remove('swiper-button-disabled');
  }
}

// Виклик функції 
updateNavigationButtons();

// Додавання обробників подій для кнопок навігації
nextButton.addEventListener('click', () => {
  if (!nextButton.classList.contains('swiper-button-disabled')) {
    swiperInstance.slideNext();
  }
});

prevButton.addEventListener('click', () => {
  if (!prevButton.classList.contains('swiper-button-disabled')) {
    swiperInstance.slidePrev();
  }
});

// Додавання обробника подій для клавіатури
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      if (!prevButton.classList.contains('swiper-button-disabled')) {
        swiperInstance.slidePrev();
      }
      break;
    case 'ArrowRight':
      if (!nextButton.classList.contains('swiper-button-disabled')) {
        swiperInstance.slideNext();
      }
      break;
  
  }
});

// Оновлення кнопок при зміні слайдів
swiperInstance.on('slideChange', updateNavigationButtons);

// Обробник подій для кнопок
document.addEventListener('DOMContentLoaded', () => {
  //всі кнопок з класом 'projects-button'
  const buttons = document.querySelectorAll('.projects-button');

  // обробник події кліку на кожну кнопку
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // URL з атрибута data-url
      const url = button.getAttribute('data-url');
      if (url) {
        window.location.href = url;
      }
    });
  });
});