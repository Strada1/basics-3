
const form = document.querySelector('.form');
const output = document.querySelector('.output');
const serverUrl = 'https://api.genderize.io';
let firstName = '';

function getName(event) {
  event.preventDefault();
  const textInputData = event.target[0].value;
  firstName = textInputData;
  const url = `${serverUrl}?name=${firstName}`;
  postServer(url);
}

function formHundler(form) {
  form.addEventListener('submit', getName);
}
formHundler(form);

function postServer(url) {
  fetch(url)
    .then(response => response.json()) // тут получаем объект Promise
    .then(result => {
      const nameGender = result.gender;
      output.textContent = `${firstName} is ${nameGender}`;
    });
}