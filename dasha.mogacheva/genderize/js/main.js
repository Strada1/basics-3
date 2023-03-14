const form = document.body.querySelector('.form-input');
const inputName = document.body.querySelector('.input-name');
const resultList = document.body.querySelector('.result-list');

async function genderize() {
    const serverUrl = 'https://api.genderize.io';
    const firstName = inputName.value;
    const url = `${serverUrl}?name=${firstName}`;
    let response = await fetch(url);
    if (response.ok) {
        let nameJson = await response.json();
        if (nameJson.gender === null) {
            alert('Error: impossible to determine gender');
        }
        const result = document.createElement('p');
        resultList.insertAdjacentElement('afterbegin', result);
        result.textContent = `${inputName.value} is ${nameJson.gender}`;
        inputName.value = '';
    } else {
        alert(`Error:  + ${response.status}`);
    }
}

form.addEventListener("submit", e => {
    e.preventDefault();
    genderize();
});