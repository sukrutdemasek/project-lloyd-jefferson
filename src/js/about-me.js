document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.accordion-btn');
    
    buttons.forEach((button, index) => {
        const content = button.nextElementSibling;
        
        // Устанавливаем первую секцию как открытую по умолчанию
        if (index === 0) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }

        button.addEventListener('click', () => {
            // Проверяем, если текущая секция уже открыта
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                // Закрываем все другие секции
                document.querySelectorAll('.ac-content').forEach(item => {
                    item.style.display = 'none';
                });
                // Открываем текущую секцию
                content.style.display = 'block';
            }
        });
    });
});