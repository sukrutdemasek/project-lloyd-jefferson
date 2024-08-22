import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  
    new Accordion('.accordion-info-about-me-list', {
      duration: 300,
        showMultiple: true,
      openOnInit: [0],
    });
    
});
 const firstelement = document.querySelector('.first-element-about');
/*---------Swiper-----------------*/
import Swiper from 'swiper';
import 'swiper/css';


const section = document.querySelector('.about-me');
const aboutMeSlider = section.querySelector('.about-me-swiper');

    const swiper = new Swiper(aboutMeSlider, {
        slidesPerView: 'auto',  // This makes the slides fit the container
        loop: true,
        speed: 600,// This makes the slider infinite
        navigation: {
            nextEl: section.querySelector('.swiper-button-next'),
            loop: true,// Button to go to the next slide
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





