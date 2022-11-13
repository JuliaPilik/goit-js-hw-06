function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const colorEl = document.querySelector('.color');
const cnangeColorEl = document.querySelector('.change-color');

const onButtonClick = () => {
  const colorRandom = getRandomHexColor();
  colorEl.textContent = colorRandom;
  body.style.backgroundColor = colorRandom;
};

cnangeColorEl.addEventListener("click", onButtonClick);


