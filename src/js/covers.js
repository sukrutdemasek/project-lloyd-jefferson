document.addEventListener('DOMContentLoaded', () => {
  const coversSection = document.querySelector('.marquee-inner');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        coversSection.classList.remove('scrolling');
      } else {
        coversSection.classList.add('scrolling');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(coversSection);
});