const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
document.querySelector('#font-size-control').value = '16';

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    textEl.style.fontSize = event.currentTarget.value + "px";
}