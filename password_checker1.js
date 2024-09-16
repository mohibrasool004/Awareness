function checkPassword() {
    const password = document.getElementById('password').value;
    const result = document.getElementById('result');
    
    // Example password strength check (simplified)
    let strength = 'Weak';
    if (password.length > 8) {
        strength = 'Moderate';
        if (/[A-Z]/.test(password) && /[0-9]/.test(password)) {
            strength = 'Strong';
        }
    }
    
    result.innerHTML = `<div id="password-strength">Password Strength: ${strength}</div>`;
    
    if (strength === 'Weak') {
        result.innerHTML += '<div id="suggestions">Try adding more characters, numbers, and special characters.</div>';
    }
}
