console.log('contact form');


// contact form script

let form = document.querySelector('form');
form.addEventListener('submit', formSubmitted);

function formSubmitted(e) {
    e.preventDefault();
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let msg = document.getElementById('msg').value;
        console.log(fullName, email, msg);
}
