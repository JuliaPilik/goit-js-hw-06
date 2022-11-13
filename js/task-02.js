const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const liEL = document.createElement('li');
  liEL.textContent = option;
  liEL.classList.add('item');
  return liEL;
});

listEl.append(...elements);
