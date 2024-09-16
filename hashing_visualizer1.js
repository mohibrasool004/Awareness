// hashing_visualizer1.js

function hash() {
    const text = document.getElementById('text').value;
    const algorithm = document.getElementById('algorithm').value;
    let result;

    if (!text) {
        document.getElementById('result').innerHTML = "Please provide text to hash.";
        return;
    }

    switch (algorithm) {
        case 'md5':
            result = md5Hash(text);
            break;
        case 'sha256':
            result = sha256Hash(text);
            break;
        default:
            result = "Unsupported algorithm.";
    }

    document.getElementById('result').innerHTML = `<strong>Hashed Text:</strong> ${result}`;
}

function md5Hash(text) {
    try {
        const hashed = CryptoJS.MD5(text).toString();
        return hashed;
    } catch (e) {
        return "Hashing failed.";
    }
}

function sha256Hash(text) {
    try {
        const hashed = CryptoJS.SHA256(text).toString();
        return hashed;
    } catch (e) {
        return "Hashing failed.";
    }
}
