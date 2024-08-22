document.querySelector('.menu-link').addEventListener('click', function (event) {
  event.preventDefault();
  const dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', function (event) {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const menuLink = document.querySelector('.menu-link');

  if (!dropdownMenu.contains(event.target) && !menuLink.contains(event.target)) {
    dropdownMenu.classList.remove('show');
  }
});

document.querySelectorAll('.dropdown-menu a').forEach(function (link) {
  link.addEventListener('click', function () {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.remove('show');
  });
});
