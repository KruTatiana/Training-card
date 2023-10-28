let email = document.querySelector('.email')

let username = document.querySelector('.name')
let emailInput = document.getElementById('email')
function changeInfo() {
    if (emailInput.value !== '') {
        email.textContent = emailInput.value;
    }
    else (alert("заполните форму"))
}
let inputs = document.querySelectorAll('.form-info > div > input');
function clearInputs(inputs) {
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

function createName() {
    let firstName = document.querySelector('.firstName');
    let secondName = document.querySelector('.secondName')
    let name = [];
    name.push(firstName.value);
    name.push(secondName.value);
    name = name.join(' ')
    return name

}
function changeName() {
    let nameInput = document.querySelector('.name')

    let newName = createName();
    if (newName !== '') {
        nameInput.textContent = newName
    }
    else (alert("заполните форму"))
}

let buttonInfo = document.querySelector('.form-button');
buttonInfo.addEventListener('click', function changeInformation(event) {
    event.preventDefault();
    changeInfo();
    changeName();
    clearInputs(inputs);

})



let buttonCard = document.querySelector('#submitCard');
let cardInputs = document.querySelectorAll(('.form-pay > div > input'))

function thanks() {
    let thank = document.querySelector('.hiddenSpan');

    thank.classList.remove('hiddenSpan');
}
// function validateCreditCard(){
//     let sixteen = /^\d{16}$/
//     let validateInput  = document.querySelector('.credit').value
//     console.log(validateInput)
//     if (sixteen.test(validateInput) == false){
//         alert("Please enter your 16 digit credit card numbers")};

// }



buttonCard.addEventListener('submit', function changeValues(event) {
    event.preventDefault();
    // validateCreditCard();
    clearInputs(cardInputs);
    thanks();
})
