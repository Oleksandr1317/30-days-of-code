document.addEventListener("DOMContentLoaded", function() {
    var inputs = document.querySelectorAll('.input-element');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            validateInput(input);
        });
    });
});


function validateInput(input) {
    var value = input.value.trim();
    var errorElement = document.getElementById(input.id + 'Error');
    var isValid = true;

    switch (input.id) {
        case 'firstname':
            if (value.length < 3 || value.length > 16) {
                errorElement.innerHTML = "First Name must be alphanumeric and contain 3-16 characters";
                isValid = false;
            } else {
                errorElement.innerHTML = "";
            }
            break;
        case 'lastname':
            if (value.length < 3 || value.length > 16) {
                errorElement.innerHTML = "Last Name must be alphanumeric and contain 3-16 characters";
                isValid = false;
            } else {
                errorElement.innerHTML = "";
            }
            break;
        case 'email':
            if (!validateEmail(value)) {
                errorElement.innerHTML = "Email must be a valid address, e.g. example@example.com";
                isValid = false;
            } else {
                errorElement.innerHTML = "";
            }
            break;
        case 'password':
            if (value.length < 6 || value.length > 20) {
                errorElement.innerHTML = "Password must be alphanumeric and between 6-20 characters";
                isValid = false;
            } else {
                errorElement.innerHTML = "";
            }
            break;
        case 'telephone':
            if (value.length !== 10) {
                errorElement.innerHTML = "Telephone must be a valid 10-digit number";
                isValid = false;
            } else {
                errorElement.innerHTML = "";
            }
            break;
        case 'bio':
            if (value.length < 8 || value.length > 30) {
                errorElement.innerHTML = "Bio must contain only lowercase letters, underscores, hyphens and be 8-30 characters";
                isValid = false;
            } else {
                errorElement.innerHTML = "";
            }
            break;
        default:
            break;
    }

    console.log(count)

    input.style.borderColor = isValid ? "green" : "red";

    return isValid;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var buttonEye = document.getElementById("eyeButton");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
    buttonEye.innerHTML = passwordField.type === "password" ? `<i class="fa-solid fa-eye"></i>` : `<i class="fa-solid fa-eye-slash"></i>`;
}

function validateForm() {
    var inputs = document.querySelectorAll('.input-element');
    var isValid = true;
    inputs.forEach(function(input) {
        if (!validateInput(input)) {
            isValid = false;
        }
    });

    return isValid;
}