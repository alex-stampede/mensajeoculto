const encryptionMap = {
    'a': 'bar', 'b': 'cer', 'c': 'dri', 'd': 'eri', 'e': 'fio',
    'f': 'gol', 'g': 'hil', 'h': 'ito', 'i': 'jay', 'j': 'kul',
    'k': 'lao', 'l': 'mao', 'm': 'nua', 'n': 'ñor', 'ñ': 'opa',
    'o': 'pea', 'p': 'qlo', 'q': 'rat', 'r': 'sat', 's': 'tan',
    't': 'ula', 'u': 'via', 'v': 'wea', 'w': 'xia', 'x': 'yea',
    'y': 'zia', 'z': 'ala'
};

const decryptionMap = Object.fromEntries(Object.entries(encryptionMap).map(([key, value]) => [value, key]));

document.getElementById('encrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = inputText.split('').map(char => encryptionMap[char] || char).join('');
    displayResult(encryptedText);
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    let inputText = document.getElementById('input-text').value;
    const regex = new RegExp(Object.keys(decryptionMap).join('|'), 'g');
    const decryptedText = inputText.replace(regex, matched => decryptionMap[matched]);
    displayResult(decryptedText);
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const resultText = document.getElementById('result-text').textContent;
    navigator.clipboard.writeText(resultText);
});

function displayResult(resultText) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p id="result-text">${resultText}</p>`;
    document.getElementById('copy-btn').style.display = 'block';
}

document.getElementById('encrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = inputText.split('').map(char => encryptionMap[char] || char).join('');
    displayResult(encryptedText);
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    let inputText = document.getElementById('input-text').value;
    const regex = new RegExp(Object.keys(decryptionMap).join('|'), 'g');
    const decryptedText = inputText.replace(regex, matched => decryptionMap[matched]);
    displayResult(decryptedText);
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const resultText = document.getElementById('result-text').textContent;
    navigator.clipboard.writeText(resultText);
});

function displayResult(resultText) {
    const resultElement = document.getElementById('result');
    const resultTextElement = document.getElementById('result-text');
    
    resultTextElement.textContent = resultText;
    resultTextElement.style.display = 'block';
    document.getElementById('copy-btn').style.display = 'block';
    document.querySelector('#result img').style.display = 'none';
    document.querySelector('.no-message').style.display = 'none';
}
