
const formHigh = document.getElementById('form-high');
                                        
const inputHigh = document.getElementById('input-high');

const addButtonHigh = document.getElementById('add-button-high');

const formLow = document.getElementById('form-low');

const inputLow = document.getElementById('input-low');

const addButtonLow = document.getElementById('add-button-low');

const lowTask = document.getElementById('low-task');

const highTask = document.getElementById('high-task');

function addTaskHigh(e) {
  
  if (inputHigh.value == '') {
    alert('Строка пуста, введите значение!');
  } else {
    highTask.insertAdjacentHTML('beforeend', `<div class="todo">
    <input type="checkbox">
    <span>${inputHigh.value}</span>
    <button class="closeButton">X</button>
    </div>`);
  }
  e.preventDefault();
}

function addTaskLow(e) {
  
  if (inputLow.value == '') {
    alert('Строка пуста, введите значение!');
  } else {
    lowTask.insertAdjacentHTML('beforeend', `<div class="todo">
    <input type="checkbox">
    <span>${inputLow.value}</span>
    <button class="closeButton">X</button>
    </div>`);
  }
  e.preventDefault();
}

addButtonHigh.addEventListener('click', addTaskHigh);

formHigh.addEventListener('submit', addTaskHigh);

addButtonLow.addEventListener('click', addTaskLow);

formLow.addEventListener('submit', addTaskLow);