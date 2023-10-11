const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const submitButton = document.getElementById('submit-button');

function showError(input, message) {
    input.className = 'is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function showSuccess(input, message) {
    input.className = 'is-valid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'valid-feedback';
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Restore saved data
const savedData = JSON.parse(localStorage.getItem('formData'));
if (savedData) {
    username.value = savedData.username;
    email.value = savedData.email;
    password.value = savedData.password;
    repassword.value = savedData.repassword;
}

// Enable/disable submit button based on form input
form.addEventListener('input', function () {
    submitButton.disabled = !(username.value && email.value && validateEmail(email.value) && password.value && repassword.value);
    if (!submitButton.disabled) {
        const formData = {
            username: username.value,
            email: email.value,
            password: password.value,
            repassword: repassword.value
        };
        localStorage.setItem('formData', JSON.stringify(formData));
    }
});

// Form submission validation
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!username.value) {
        showError(username, 'Kullanıcı adı gereklidir');
    } else {
        showSuccess(username, 'Kullanıcı adı doğru');
    }

    if (!email.value) {
        showError(email, 'E-posta gereklidir');
    } else if (!validateEmail(email.value)) {
        showError(email, 'Geçerli bir e-posta adresi giriniz');
    } else {
        showSuccess(email, 'E-posta doğru');
    }

    if (!password.value) {
        showError(password, 'Şifre gereklidir');
    } else {
        showSuccess(password, 'Şifre doğru');
    }

    if (!repassword.value) {
        showError(repassword, 'Şifre tekrarı gereklidir');
    } else if (password.value !== repassword.value) {
        showError(repassword, 'Şifreler eşleşmiyor');
    } else {
        showSuccess(repassword, 'Şifreler aynı');
    }
});