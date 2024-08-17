import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    
    // Initialize the Accordion with the specified container class
    // This will find all elements with the class '.accordion-container' 
    // and apply the Accordion functionality to them
    new Accordion('.accordion-container');
});








// import 'swiper-bundle.min.css'
// import Swiper from 'swiper';



document.addEventListener('DOMContentLoaded', () => {
    // Инициализация Swiper
    const swiper = new Swiper('.swiper-container', {
        modules:[Navigation, Pagination, Scrollbar],
        loop: true,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        mousewheel: false,
        touchEventsTarget: 'container',
        breakpoints: {
            375: {
                slidesPerView: 'auto',
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 0,
            },
            1440: {
                slidesPerView: 'auto',
                spaceBetween: 0,
            }
        }
    });

    // Обработка кнопки переключения слайдов
    const switcher = document.querySelector('.btn-skills-switcher');
    if (switcher) {
        switcher.addEventListener('click', () => {
            swiper.slideNext(); // Переключение на следующий слайд
        });
    }
});