const form = document.getElementById('form');
const inputField = document.getElementById('name-input');
const answerField = document.getElementById('answer');

function request(event) {
    event.preventDefault();

    let firstName = inputField.value;

    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;

    if (firstName == '') {
        return alert('Please, enter the name in field.');
    };

    answerField.textContent = 'Loading...';

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Unsuccessfull response 
                (${response.status}: ${response.statusText})`);
            };

            return response.json();
        })
        .then((data) => {
            if (data.gender == null) {
                answerField.textContent = `Sorry, the name "${data.name}" wasn't found in database.`;
            } else {
                answerField.textContent = `The name ${data.name} is ${data.gender} 
                with a probability of ${data.probability * 100}%`;
            };
        })
        .catch((error) => {
            answerField.textContent = `${error.message}`;
            console.log(error);
        })
        .finally(() => {inputField.value = ''});
}

form.addEventListener('submit', request);