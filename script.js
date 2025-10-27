// script.js
function validateForm(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message");
    if (name && email) {
        message.innerText = `Registration successful for ${name}!`;
        return true;
    } else {
        message.innerText = "Please fill all required fields.";
        return false;
    }
}