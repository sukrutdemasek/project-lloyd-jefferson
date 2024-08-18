document.addEventListener('DOMContentLoaded', () => {
  const coversSection = document.querySelector('.covers-section');
  const imageLines = document.querySelectorAll('.marquee-line');
  if (!coversSection) {
    return;
  }
  const handleIntersection = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        for (let line of imageLines) {
          line.classList.add('animate');
        }
      } else {
        for (let line of imageLines) {
          line.classList.remove('animate');
        }
      }
    });
  };
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.2,
  });
  observer.observe(coversSection);
});
