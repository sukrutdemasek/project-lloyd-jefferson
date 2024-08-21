(() => {
  // Вибрати відповідні DOM-елементи
  const mobileMenu = document.querySelector('.menu-burger');
  const openMenuBtn = document.querySelector('.js-open-burger');
  const closeMenuBtn = document.querySelector('.js-close-burger');
  const menuLinks = document.querySelectorAll('.burger-menu-nav-link'); // Всі посилання в меню
  const orderProjectBtn = document.querySelector('.burger-button-link'); // Кнопка "Order the project"
  const body = document.body;

  // Функція для перемикання меню
  const toggleMenu = () => {
    if (mobileMenu) {
      const isMenuOpen = mobileMenu.classList.contains('is-open');
      mobileMenu.classList.toggle('is-open', !isMenuOpen);
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

      // Блокування або розблокування прокручування тіла в залежності від стану меню
      if (!isMenuOpen) {
        body.classList.add('no-scroll');
      } else {
        body.classList.remove('no-scroll');
      }
    }
  };

  // Закриття меню при натисканні на посилання
  const closeMenuOnLinkClick = () => {
    if (mobileMenu) {
      mobileMenu.classList.remove('is-open');
      if (openMenuBtn) {
        openMenuBtn.setAttribute('aria-expanded', false);
      }
      body.classList.remove('no-scroll');
    }
  };

  // Перевірити, чи існують елементи, перш ніж додавати обробники подій
  if (openMenuBtn) {
    openMenuBtn.addEventListener('click', toggleMenu);
  }
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', toggleMenu);
  }

  // Додати обробник подій для всіх посилань у меню
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenuOnLinkClick);
  });

  // Додати обробник подій для кнопки "Order the project"
  if (orderProjectBtn) {
    orderProjectBtn.addEventListener('click', closeMenuOnLinkClick);
  }

  // Закрити мобільне меню при зміні орієнтації на більших екранах
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (e.matches && mobileMenu) {
      mobileMenu.classList.remove('is-open');
      if (openMenuBtn) {
        openMenuBtn.setAttribute('aria-expanded', false);
      }
      body.classList.remove('no-scroll');
    }
  });
})();

