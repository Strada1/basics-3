'use strict';

// Data
import { data } from "./data.js";
import { STATUSES } from "./constants";

let todoList = null;

// DOM Elements
import {
  highTasks,
  highForm,
  highField,
  highBtn,
  lowTasks,
  lowForm,
  lowField,
  lowBtn,
} from "./views.js";

import { resetFields } from "./utils";
import { checkEmptyString } from "./validators";

// Features
function init () {
  todoList = [...data] || [];

  if (!todoList.length) {
    return;
  }

  render();
}

function addNewTask(e, { group, field, status }) {
  e.preventDefault();

  if (!checkEmptyString(field.value)) {
    return;
  }

  todoList.push({
    id: Math.random(),
    text: field.value,
    status: status,
    done: false,
  });

  resetFields([field]);

  render(group);
}

function render () {
  // Reset DOM
  highTasks.innerHTML = '';
  lowTasks.innerHTML = '';

  // Render DOM
  todoList.forEach(task => {
    const elDiv = document.createElement('div');
    const elBtn = document.createElement('button');
    const existHigh = highTasks.querySelector(`[data-id="${task.id}"]`);
    const existLow = lowTasks.querySelector(`[data-id="${task.id}"]`);

    if (!existHigh && !existLow) {
      elDiv.classList.add(`${task.status}__task`, 'task');
      elDiv.setAttribute('data-id', `${task.id}`);
      elBtn.classList.add('task__remove');

      elBtn.innerHTML = `<img src="./img/remove-icon.svg" alt="Remove Icon">`;
      elDiv.innerHTML = `
      <label>
          <input type="checkbox" class="checkbox task__checkbox">
      </label>
  
      <p class="task__text">${task.text}</p>
      `;

      elBtn.addEventListener('click', function () {
        const idTask = Number(this.parentElement.dataset.id);

        todoList = todoList.filter((task) => task.id !== idTask);

        render();
      });

      if (task.done) {
        elDiv.querySelector('.task__checkbox').checked = task.done;
        elDiv.querySelector('.task__text').classList.add('done');
      }

      elDiv.querySelector('.task__checkbox').addEventListener('click', function () {
        elDiv.querySelector('.task__text').classList.toggle('done');
      });

      elDiv.appendChild(elBtn);

      if (task.status === STATUSES.HIGH) {
        highTasks.appendChild(elDiv);
      }

      if (task.status === STATUSES.LOW) {
        lowTasks.appendChild(elDiv);
      }
    }
  });
}

// Init App
window.addEventListener('DOMContentLoaded', init);
highForm.addEventListener('submit', (e) => addNewTask(e, {
  group: highTasks,
  field: highField,
  status: STATUSES.HIGH
}));
lowForm.addEventListener('submit', (e) => addNewTask(e, {
  group: lowTasks,
  field: lowField,
  status: STATUSES.LOW
}));
