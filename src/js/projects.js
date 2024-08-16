// main.js 
// Просто не працює логіка, не бачу в чому завтик мій. Чи не так підклюв. 
// Сірим світяться навігація, пагінація, кава, колесо. Pagination' is declared but its value is never read, ще не вирішив цю проблему. Честно кажучи поки не знаю як
import Swiper, { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper';
import 'swiper/swiper-bundle.min.css'; 

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-projects-container', {
    // Налаштування
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      invert: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1440: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    },
  });
});
