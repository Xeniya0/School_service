// Создаем кнопку и добавляем её в DOM
const button = document.createElement('button');
button.innerText = '↑';
button.style.position = 'fixed';
button.style.bottom = '40px';
button.style.right = '20px';
button.style.display = 'none'; // Скрываем кнопку изначально
button.style.padding = '7px 25px';
button.style.fontSize = '16px';
button.style.backgroundColor = '#b0b0b0'; // Изначально серая кнопка
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '50%';
button.style.cursor = 'pointer';
button.style.boxShadow = '0px 5px 15px rgba(0, 0, 0, 0.5)';
button.style.zIndex = '99';
button.style.borderBottom = '3px solid #8a8a8a'; // Серая граница
button.style.transition = 'all .6s ease';
button.style.fontSize = '2em';

// Добавляем стили для hover, focus и active
button.addEventListener('mouseover', () => {
  button.style.backgroundColor = '#2e3092'; // Синий цвет при наведении
  button.style.borderBottom = '3px solid #1f2061';
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = '#b0b0b0'; // Возвращаем серый цвет
  button.style.borderBottom = '3px solid #8a8a8a';
});

button.addEventListener('mousedown', () => {
  button.style.backgroundColor = '#1f2061'; // Более темный синий при нажатии
});

button.addEventListener('mouseup', () => {
  button.style.backgroundColor = '#2e3092'; // Синий после нажатия
});

// Добавляем кнопку в body
document.body.appendChild(button);

// Отслеживаем прокрутку страницы
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // Показываем кнопку, если прокрутили больше 200px
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

// Добавляем событие нажатия на кнопку
button.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Плавная прокрутка
  });
});