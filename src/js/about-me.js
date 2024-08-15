document.addEventListener('DOMContentLoaded', function() {
  // Находим все кнопки аккордеона
  const accButtons = document.querySelectorAll('.accordion-btn');

  accButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Находим следующий элемент списка
      const content = button.nextElementSibling;

      // Переключаем класс для показа или скрытия контента
      if (content.classList.contains('show')) {
        content.classList.remove('show');
        button.classList.remove('active');
      } else {
        // Закрываем все открытые секции
        document.querySelectorAll('.descrip-text-list.show').forEach(item => {
          item.classList.remove('show');
          item.previousElementSibling.classList.remove('active');
        });
        // Открываем текущую секцию
        content.classList.add('show');
        button.classList.add('active');
      }
    });
  });
});