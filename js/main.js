const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const btnClear = document.querySelector('.clear')
const btnSend = document.querySelector('.send')
const popup = document.querySelector('.popup')

const showError = (input, msg) => {
    const formBox = input.parentElement;
    const msgErorr = formBox.querySelector('.error-text')

    formBox.classList.add('error')
    msgErorr.textContent = msg;

}

const clearError = input => {
    const formBox = input.parentElement;

    formBox.classList.remove('error')
   
};

const checkForm = input => {

    input.forEach(el => {
        if(el.value !== '') {
            showError(el, el.placeholder)
        } else {
            clearError(el)
        }
    })
}

const checkLength = (input, min) => {

    const inputs = input.previousElementSibling.innerHTML.slice(0, -1)

    if(input.value.length < min) {
        showError(input, `${inputs} składa się z minimum ${min} znaków.`)
    }
}

const checkPassword = (pass1, pass2) => {

    if(pass1.value !== pass2.value) {
        showError(pass2, 'Hasła do siebie nie pasują')
    }
}

const checkEmial =  email => {

    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(re.test(email)) {

        clearError(email)
    } else {
        showError(email, 'E-mail jest niepoprawny')
    }

}

btnSend.addEventListener('click', e => {
    e.preventDefault();
    
    checkForm([username, pass, pass2, email])
    checkLength(username, 3)
    checkLength(pass, 8)
})

btnClear.addEventListener('click', e => {   
    e.preventDefault();

    [username, pass, pass2, email].forEach(el => {
        el.value = '';
        clearError(el)
    })
})