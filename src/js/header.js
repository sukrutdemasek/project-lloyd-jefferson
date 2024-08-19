document.querySelector('.menu-link').addEventListener('click', function (event) {
  event.preventDefault();
  const dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.classList.toggle('show');
});
