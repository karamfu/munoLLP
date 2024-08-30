const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

const clearInputs = () => {
    const registerInputs = document.querySelectorAll('.form-box.register input');
    registerInputs.forEach(input => {
        input.value = '';
    });

    errorContainer.textContent = '';

    const loginInputs = document.querySelectorAll('.form-box.login input');
    if (!rememberCheckbox.checked) {
        loginInputs.forEach(input => {
            input.value = '';
        });
    }
};

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    clearInputs();
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    clearInputs();
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

const registerForm = document.querySelector('.form-box.register form');
const passwordInput = document.querySelector('.form-box.register input[type="password"]');
const errorContainer = document.createElement('div');

errorContainer.style.color = 'red';
errorContainer.style.fontSize = '0.9em';
errorContainer.style.textAlign = 'center';
errorContainer.style.marginTop = '10px';
errorContainer.classList.add('error-container');

registerForm.appendChild(errorContainer);

registerForm.addEventListener('submit', (event) => {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue.length < 4) {
        errorContainer.textContent = 'The password needs to be at least 4 characters.';
        passwordInput.focus();
        event.preventDefault(); 
    } 
});

const loginForm = document.querySelector('.form-box.login form');
const rememberCheckbox = document.querySelector('.form-box.login input[type="checkbox"]');
const emailInput = document.querySelector('.form-box.login input[type="email"]');

// Load stored values on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedEmail = localStorage.getItem('rememberedEmail');
    const storedPassword = localStorage.getItem('rememberedPassword');

    if (storedEmail) {
        emailInput.value = storedEmail;

        // Check if passwordInput exists before setting its value
        if (storedPassword && passwordInput) {
            passwordInput.value = storedPassword;
        }

        rememberCheckbox.checked = true;
    }
});


// Save values to local storage when the form is submitted
loginForm.addEventListener('submit', () => {
    if (rememberCheckbox.checked) {
        localStorage.setItem('rememberedEmail', emailInput.value);
        localStorage.setItem('rememberedPassword', passwordInput.value);
    } else {
        // Clear stored values if "Remember Me" is unchecked
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberedPassword');
    }
});

