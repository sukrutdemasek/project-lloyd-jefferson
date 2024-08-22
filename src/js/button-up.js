const btnUp = document.querySelector('#up-scroll');

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this, args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function scrollFunction() {
  if (window.scrollY > 250) {
    btnUp.classList.add('visible');
  } else {
    btnUp.classList.remove('visible');
  }
}

btnUp.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', debounce(scrollFunction));