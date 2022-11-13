const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputFocus);

function onInputFocus(event) {

    const validLength = Number(event.currentTarget.dataset.length);

    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.remove("valid");
    
    if (Number(event.currentTarget.value.length) === validLength) {
        
        event.currentTarget.classList.add("valid");
    } else {
        event.currentTarget.classList.add("invalid");
    }
}
