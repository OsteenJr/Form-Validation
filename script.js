const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const msgError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
    const name = document.getElementById("contact-name").value; //The .value property retrieves the current text that the user has entered into the field.
    if (name.length == 0) {
        nameError.innerHTML = "Name is Required";
        return false;
    } else if (!name.match(/^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/)) {
        nameError.innerHTML = "Please enter a valid Full Name";
        return false;
    // } else if (name.length < 3) {
    //     nameError.innerHTML = "Name must be at least 3 characters";
    //     return false;
    } else {
        nameError.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        return true;
    }
   

}

function validatePhone() {
    const phone = document.getElementById("contact-phone").value; //The .value property retrieves the current text that the user has entered into the field.
    if (phone.length == 0) {
        phoneError.innerHTML = "Phone is Required";
        return false;
    } else if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = "Please enter a valid 11-digit Phone Number";
        return false;
    } else if (phone.length !== 11) {
        phoneError.innerHTML = "Phone Number must be 11 digits";
        return false;
    } else {
        phoneError.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        return true;
    }
   

}

function validateEmail() {
    const email = document.getElementById("contact-email").value; 
    if (email.length == 0) {
        emailError.innerHTML = "Email is Required";
        return false;
    } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
       emailError.innerHTML = "Please enter a valid email address";
        return false;
    } else {
        emailError.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
        return true;
    }
}

function validateMsg() {
    const msg = document.getElementById("contact-msg").value;
    if (msg.length == 0) {
        msgError.innerHTML = "Message is Required";
        return false;
    } else if (msg.length < 15) {
            msgError.innerHTML = "Message must be at least 15 characters";
            return false;
        } else {
        msgError.innerHTML = '<i class="ri-checkbox-circle-line"></i>';
    }
}

function validateForm() {
    // Check if all validation functions return true
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMsg()) {
        // If any validation fails, show an error message
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fill out the form correctly";
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    // } else {
    //     // If all validations pass, show a success message
    //     submitError.innerHTML = "Thank you for filling out this form";
    //     return true;
    // }
    }
}
