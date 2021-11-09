
const changeColorButton = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');


function onChangeColorButtonClick() {
  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  const newLocal = getRandomHexColor();
  document.body.style.backgroundColor = newLocal;
  spanEl.textContent = newLocal;
}

changeColorButton.addEventListener('click', onChangeColorButtonClick);


