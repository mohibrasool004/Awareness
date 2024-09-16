// encryption_visualizer1.js

function encrypt() {
    const text = document.getElementById('text').value;
    const key = document.getElementById('key').value;
    const algorithm = document.getElementById('algorithm').value;
    let result;

    if (!text || !key) {
        document.getElementById('result').innerHTML = "Please provide both text and key.";
        return;
    }

    switch (algorithm) {
        case 'aes':
            result = aesEncrypt(text, key);
            break;
        case 'des':
            result = desEncrypt(text, key); // Not implemented
            break;
        case 'rsa':
            result = rsaEncrypt(text, key); // Not implemented
            break;
        default:
            result = "Unsupported algorithm.";
    }

    document.getElementById('result').innerHTML = `<strong>Encrypted Text:</strong> ${result}`;
}

function aesEncrypt(text, key) {
    try {
        const encrypted = CryptoJS.AES.encrypt(text, key).toString();
        return encrypted;
    } catch (e) {
        return "Encryption failed.";
    }
}

function desEncrypt(text, key) {
    // Placeholder for DES encryption
    return "DES encryption is not implemented.";
}

function rsaEncrypt(text, key) {
    // Placeholder for RSA encryption
    return "RSA encryption is not implemented.";
}
