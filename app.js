'use strict';

// Views
const personInfo = document.getElementById('text');
const form = document.getElementById('form');
const field = document.getElementById('field');

function fetchData(url) {
  if (!field.value.length) {
    personInfo.textContent = `The field must be fill!`;
    return;
  }

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    })
    .then(({ name, gender }) => {
      personInfo.textContent = `${name} is ${gender}`;
    })
    .catch(error => {
      personInfo.textContent = `Error: ${error}`;
      console.error('Error:', error);
    });
}

function postData(e) {
  e.preventDefault();

  const serverUrl = 'https://api.genderize.io';
  const url = `${serverUrl}?name=${field.value}`;

  fetchData(url);

  field.value = '';
}

form.addEventListener('submit', (e) => postData(e));
