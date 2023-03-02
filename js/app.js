'use strict';
import { form, input, high } from './views.js';

const data = [
  {
    id: 1,
    text: 'Вот вам и супер интересная тема',
    status: 'high',
    done: false,
  }
];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (input.value === '') {
    return
  }

  const newEl = document.createElement('div');
  newEl.classList.add('high__task', 'task');
  newEl.innerHTML = `
  <label>
    <input type="checkbox" class="checkbox task__checkbox">
  </label>
  
  <p class="task__text">${input.value}</p>
  
  <button>
    <img src="./img/remove-icon.svg" alt="Remove Icon">
  </button>
  `;

  high.appendChild(newEl);

  input.value = '';
})

function render() {
  console.log(data);
}

render();
