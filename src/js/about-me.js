import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  
    new Accordion('.accordion-info-about-me-list', {
      duration: 700,
      showMultiple: true,

    onOpen: currentElement => {
      currentElement.querySelector('.ac-trigger').classList.add('btn-roll');
    },
    onClose: currentElement => {
      currentElement.querySelector('.ac-trigger').classList.remove('btn-roll');
    },
});
});
