import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  
    new Accordion('.accordion-info-about-me-list', {
      duration: 700,
      showMultiple: true,
});
});

/*---------Swiper-----------------*/
import Swiper from 'swiper';
import 'swiper/css';


const section = document.querySelector('.about-me');
const aboutMeSlider = section.querySelector('.about-me-swiper');

    const swiper = new Swiper(aboutMeSlider, {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,  // This makes the slider infinite
        navigation: {
            nextEl: section.querySelector('.swiper-button-next'),  // Button to go to the next slide
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 6,
            },
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        mousewheel: true,
    });

    // Button event listener for the "next" button
    const nextButton = section.querySelector('.swiper-button-next');

    if (nextButton) {
        nextButton.addEventListener('click', function () {
            swiper.slideNext();
        });
        
    // Keyboard navigation
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            swiper.slideNext();
        } else if (event.key === 'ArrowLeft') {
            swiper.slidePrev();
        }
    });

};






