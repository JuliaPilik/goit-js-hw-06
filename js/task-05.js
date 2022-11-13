const inputEl = document.querySelector('#name-input');
const inputValueEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
   
    if (event.currentTarget.value.length > 0) {
        inputValueEl.textContent = event.currentTarget.value;
    } else {
        inputValueEl.textContent = 'Anonymous';
    }
}