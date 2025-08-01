const btn = document.getElementById('btn');
const colorText = document.getElementById('color');

btn.addEventListener('click', () => {
  const color = getRandomColor();
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}