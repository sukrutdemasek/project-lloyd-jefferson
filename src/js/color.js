document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const colorDiv = document.querySelector('.color-div');
  const colorButtons = document.querySelectorAll('.color-button');

  const colors = ['red', 'green', 'blue', 'brick', 'rain', 'orange'];

  // Function to remove all color classes
  const removeColorClasses = () => {
    colors.forEach(color => body.classList.remove(color));
  };

  // Add event listeners to each button
  colorButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevents the event from bubbling up to the document
      removeColorClasses();
      body.classList.add(colors[index]);
      colorDiv.classList.add('collapsed'); // Adds 'collapsed' when a button is clicked
    });
  });

  // Toggle 'collapsed' class on colorDiv click
  colorDiv.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents the event from bubbling up to the document
    colorDiv.classList.toggle('collapsed');
  });

  // Add 'collapsed' class if clicked outside colorDiv
  document.addEventListener('click', () => {
    if (!colorDiv.classList.contains('collapsed')) {
      colorDiv.classList.add('collapsed');
    }
  });
});