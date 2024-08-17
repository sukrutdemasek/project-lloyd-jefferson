import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
    
    new Accordion('.accordion-container', {
     
        showMultiple: true, 
        duration: 300, 
    });
});