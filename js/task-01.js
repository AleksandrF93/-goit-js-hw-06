
const navElements = document.querySelector('#categories').children;
console.log('Number of categories:', navElements.length);

const firstItemEl = navElements[0].firstElementChild;
console.log('Category:', firstItemEl.textContent);

const firstItemElnavItemsLength = firstItemEl.nextElementSibling.children.length;
console.log('Elements:', firstItemElnavItemsLength);

const secondItemEl = navElements[1].firstElementChild;
console.log('Category:', secondItemEl.textContent);

const secondItemElnavItemsLength = secondItemEl.nextElementSibling.children.length;
console.log('Elements:', secondItemElnavItemsLength);

const thirdItemEl = navElements[2].firstElementChild;
console.log('Category:', thirdItemEl.textContent);

const thirdItemElnavItemsLength = thirdItemEl.nextElementSibling.children.length;
console.log('Elements:', thirdItemElnavItemsLength);