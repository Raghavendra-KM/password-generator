function generatePassword() {
    const lengthInput = document.getElementById('length');
    const length = parseInt(lengthInput.value, 10);

    if (isNaN(length) || length <= 0) {
        alert('Please enter a valid positive integer for the length.');
        return;
    }

    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
    const removeDuplicates = document.getElementById('removeDuplicates').checked;

    let charset = generateCharset(uppercase, lowercase, numbers, symbols);
    let password = generateRandomPassword(length, charset);

    if (removeDuplicates) {
        password = removeDuplicateCharacters(password);
    }

    document.getElementById('password').value = password;
}

function generateCharset(uppercase, lowercase, numbers, symbols) {
    let charset = '';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()-_+=<>?';

    return charset;
}

function generateRandomPassword(length, charset) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function removeDuplicateCharacters(str) {
    return [...new Set(str)].join('');
}