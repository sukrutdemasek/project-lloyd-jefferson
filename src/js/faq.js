// Import the Accordion library and its associated styles
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    
    // Initialize the Accordion with the specified container class
    // This will find all elements with the class '.accordion-container' 
    // and apply the Accordion functionality to them
    new Accordion('.accordion-container');
});
