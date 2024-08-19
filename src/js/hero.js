document.addEventListener("DOMContentLoaded", function() {
    function handleScroll() {
      const elements = document.querySelectorAll('.main-headline, .hero-contact-info');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
        if (rect.top <= windowHeight - 100 && rect.bottom >= 0) {
          element.classList.add('in-view');
        } else {
          element.classList.remove('in-view'); 
        }
      });
    }

    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);
  });