
(function() {
    const savedColor = localStorage.getItem('selectedColor');
    if (savedColor) {
        document.body.classList.add(savedColor);
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const colorDiv = document.querySelector('.color-div');
    const colorButtons = document.querySelectorAll('.color-button');
    const paintBrushIcon = document.querySelector('.icon-paint-brush');

    const colors = ['red', 'green', 'blue', 'brick', 'rain', 'orange'];


    const removeColorClasses = () => {
        colors.forEach(color => body.classList.remove(color));
    };


    colorButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            removeColorClasses();
            const selectedColor = colors[index];
            body.classList.add(selectedColor);
            colorDiv.classList.add('collapsed');
            colorDiv.classList.remove('open'); 
            localStorage.setItem('selectedColor', selectedColor); 
        });
    });
});
