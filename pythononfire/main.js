let serverUrl = 'https://api.genderize.io';
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const resultText = document.querySelector('.result');
button.addEventListener('click', getName);

function getName() {
    const firstName = input.value;
    const url = `${serverUrl}?name=${firstName}`;
    sendRequest(url, firstName);
}

function sendRequest(url, firstName) {
    fetch(url)
        .then(response => response.json())
        .then(result => showResult(result.gender, firstName))
        .catch(() => alert('ОШИБКА СТОП НОЛЬ НОЛЬ НОЛЬ \n ПРИШЛО ВРЕМЯ ПЕРЕУСТАНАВЛИВАТЬ ШИНДОВС'))
}

function showResult(gender, firstName) {
    if(gender !== null) {
        resultText.textContent = `${firstName} is ${gender}`;
    } else {
        alert('Имя введено некорректно');
    }
}