const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const navEl = document.querySelector('#ingredients');

  
const elements = [];
ingredients.forEach(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  elements.push(itemEl)
});
navEl.append(...elements);






