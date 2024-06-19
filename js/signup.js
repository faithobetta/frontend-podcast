function myfirstname() {
    var fname = document.getElementById('fname').value;
    if (fname.length == 0) {
        document.getElementById('fname_error').innerText = "First name is required";
        return false;
    } else {
        document.getElementById('fname_error').innerText = "";
        return true;
    }
}

function mylastname() {
    var lname = document.getElementById('lname').value;
    if (lname.length == 0) {
        document.getElementById('lname_error').innerText = "Last name is required";
        return false;
    } else {
        document.getElementById('lname_error').innerText = "";
        return true;
    }
}

function email_check() {
    var email = document.getElementById('email').value;
    var re = /\S+@\S+\.\S+/; // Simple email validation regex
    if (!re.test(email)) {
        document.getElementById('email_error').innerText = "Invalid email format";
        return false;
    } else {
        document.getElementById('email_error').innerText = "";
        return true;
    }
}

function phone_number() {
    var number = document.getElementById('number').value;
    if (isNaN(number) || number.length < 10) { // Example validation: must be numbers and at least 10 digits
        document.getElementById('number_error').innerText = "Invalid phone number";
        return false;
    } else {
        document.getElementById('number_error').innerText = "";
        return true;
    }
}

function val_password() {
    var password = document.getElementById('password').value;
    if (password.length < 8) { // Example validation: minimum 8 characters
        document.getElementById('password_error').innerText = "Password must be at least 8 characters";
        return false;
    } else {
        document.getElementById('password_error').innerText = "";
        return true;
    }
}

// Adding event listener for form submission
document.querySelector('form[name="form1"]').addEventListener('submit', function(e) {
    // Prevent form submission if any of the validations fail
    var validFirstname = myfirstname();
    var validLastname = mylastname();
    var validEmail = email_check();
    var validPhone = phone_number();
    var validPassword = val_password();

    if (!validFirstname || !validLastname || !validEmail || !validPhone || !validPassword) {
        e.preventDefault(); // Prevent form submission
    }
});
