

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector('#value');

let counterValue = 0;

function onDecrementButtonClick() {
    
    counterValue -= 1; 
     
    spanValue.textContent = counterValue;
    
};

decrementButton.addEventListener('click', onDecrementButtonClick);

function onIncrementButtonClick() {

    counterValue += 1;
    
    spanValue.textContent = counterValue;
    
};

incrementButton.addEventListener('click', onIncrementButtonClick);



