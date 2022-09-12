// Declare the input fields
const fullName = document.getElementById('name');
const message = document.getElementById('message');
// Declare send button
const sendButton = document.getElementById('send');

sendButton.addEventListener('click',checkInformation);

function checkInformation() {

        validate()

}

function validate() {
    // Declare limitation for email
    let email = document.getElementById('email');
    let emailFormat=/^[\w.-]{3,}@\w{5,}.*$/;

    // Declare limitation for number
    let number = document.getElementById('number');
    let numberFormat=/^\+9613[0-9]{0,6}|\+9617[0-9]{0,7}/;

    // validate full name
    if (fullName.value.length<=5) {
        document.querySelector('.error-box1').classList.add('error-message'); 
        document.querySelector('.error-box1').textContent = '-Full name is less than 5 characters';
        document.getElementById('name').style.borderColor = '#ced4da';
    }
    else {
        document.getElementById('name').style.borderColor = 'green';
        document.querySelector('.error-box1').textContent = '';
    }
    // validate email
    if (emailFormat.test(email.value)) {
        document.getElementById('email').style.borderColor = 'green';
        document.querySelector('.error-box2').textContent = '';
    }
    else {
        document.querySelector('.error-box2').classList.add('error-message'); 
        document.querySelector('.error-box2').textContent = '-Wrong email format';
        document.getElementById('email').style.borderColor = '#ced4da';
    }
    // validate number
    if (numberFormat.test(number)) {
        document.getElementById('number').style.borderColor = 'green';
        document.querySelector('.error-box3').textContent = '';
    }
    else {
        document.querySelector('.error-box3').classList.add('error-message'); 
        document.querySelector('.error-box3').textContent = '-Wrong number format';
        document.getElementById('number').style.borderColor = '#ced4da';
    }
    // validate message
    if (message.value.length<=100) {
        document.querySelector('.error-box4').classList.add('error-message');
        document.querySelector('.error-box4').textContent = '-Message is less than 100 characters';
        document.getElementById('message').style.borderColor = '#ced4da';
    }
    else {
        document.getElementById('message').style.borderColor = 'green';
        document.querySelector('.error-box4').textContent = '';
    }
}