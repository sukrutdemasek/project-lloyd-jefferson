/Для відображення випадаючого меню dropdown-menu /;

document.querySelector('.menu-link').addEventListener('click', function (e) {
  e.preventDefault();
  const dropdown = document.querySelector('.dropdown-menu');
  dropdown.classList.toggle('show');
});
