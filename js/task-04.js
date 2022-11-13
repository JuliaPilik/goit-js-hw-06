const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;

const increaseValue = () => {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
};

const reduceValue = () => {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
};

buttonIncrement.addEventListener("click", increaseValue);
buttonDecrement.addEventListener("click", reduceValue);