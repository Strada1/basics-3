const input = document.querySelector('input');
const serverUrl = 'https://api.genderize.io';

const button = document.querySelector('button');
const result = document.querySelector('.result');
button.addEventListener('click', genderize);

async function genderize(event) {
    event.preventDefault();
    const firstName = input.value;
    const url = `${serverUrl}?name=${firstName}`;
    await fetch(url)
        .then(response => response.json())
        .then(json => json.gender === null ? result.textContent = 'I don\'t know this name' : result.textContent = firstName + ' is ' + json.gender)
        .catch(err => result.textContent = err)
        .finally(input.value = '');
}
