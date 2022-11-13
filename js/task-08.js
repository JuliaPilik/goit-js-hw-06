
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email.length === 0 || password.length === 0) {
        alert("Все поля должны быть заполнены!");
        return
    } 
    const formData = {
            email,
            password,
        };

    console.log(formData);
    form.reset();
}