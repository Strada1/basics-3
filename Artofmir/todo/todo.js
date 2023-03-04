import { deleteTask, writeTask, render, writeStatus} from "./tasklist.js";
import { buttnhigh, buttnlow, inputhigh, inputlow, highStrt, lowStrt, PRIORITYS, STATUSES } from "./consts.js";

const removeDiv = (divNum, data) => {
  deleteTask(data);
  divNum.remove();
};

const changeStatus = (taskName, data, startPosition) => {

    taskName.style.backgroundColor = 'teal';
    if (startPosition === highStrt) {
      writeStatus(data, STATUSES.DONE, PRIORITYS.HIGH);
    } else if (startPosition === lowStrt) {
      writeStatus(data, STATUSES.DONE, PRIORITYS.LOW);
    };

};

function addHighTask (event) {
  let inputDataValue = inputhigh.value;
  let pos = highStrt;
  writeTask(inputDataValue, PRIORITYS.HIGH);
  createTask (inputDataValue, STATUSES.TODO, pos);
  inputhigh.value = "";
  render();
  event.preventDefault();
};

function addLowTask (event) {
  let inputDataValue = inputlow.value;
  let pos = lowStrt;
  writeTask(inputDataValue, PRIORITYS.LOW);
  createTask (inputDataValue, STATUSES.TODO, pos);
  inputlow.value = "";
  render();
  event.preventDefault();
};

function createTask(data, status, startPosition) {

  const newDiv = document.createElement('div');
  newDiv.className = 'task';
  
  const newInput = document.createElement('input');
  newInput.setAttribute("type", "radio");
  
  const newTextDiv = document.createElement('div');
  newTextDiv.textContent = data;
  newTextDiv.className = 'task-text';
  
  const newButton = document.createElement('button');
  newButton.className = 'button';
  
  const newIcon = document.createElement('ion-icon');
  newIcon.className = 'scale';
  newIcon.setAttribute("name", "close-outline");

  startPosition.after(newDiv);
  newDiv.insertAdjacentElement('afterbegin', newInput);
  newInput.after(newTextDiv);
  newTextDiv.after(newButton);
  newButton.insertAdjacentElement('afterbegin', newIcon);

  if (status === STATUSES.DONE) {
    newInput.checked = true;
    newDiv.style.backgroundColor = 'teal';
  } else {
  newInput.addEventListener('click', function () {
    changeStatus(newDiv, data, startPosition);
  });
  };

  newButton.addEventListener('click', function () {
    removeDiv(newDiv, data);
  });
};

buttnhigh.addEventListener('click', addHighTask);
buttnlow.addEventListener('click', addLowTask);



export {highStrt, lowStrt, createTask};