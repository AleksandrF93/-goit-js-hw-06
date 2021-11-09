

const inputEl = document.querySelector('#validation-input')



function onInputLength(e) {
    if (parseInt(e.currentTarget.value.length) === parseInt(e.currentTarget.dataset.length)) {
        
        e.currentTarget.classList.add('valid');
        e.currentTarget.classList.remove('invalid');
    } else {
        e.currentTarget.classList.add('invalid');
        e.currentTarget.classList.remove('valid');
    }
    
};
inputEl.addEventListener('blur', onInputLength);