const forms = document.getElementsByClassName('forms');
const highBox = document.querySelector('.high-box');
const lowBox = document.querySelector('.low-box');
const inputLow = document.querySelector('#input-low');
const inputHigh = document.querySelector('#input-high');
const closeTaskBtn = document.getElementsByClassName('close-task-btn');
const fakeCheckbox = document.getElementsByClassName('fake-checkbox');
const highBoxTodo = document.querySelector('.high-box_todo');
const highBoxDone = document.querySelector('.high-box_done');
const lowBoxTodo = document.querySelector('.low-box_todo');
const lowBoxDone = document.querySelector('.low-box_done');
const addTaskBtn = document.getElementsByClassName('add-task-btn');
let newElement;

const STATUS = {
  DONE: 'Done',
  TODO: 'To Do'
}

const PRIORITY = {
  LOW: 'low',
  HIGH: 'high'
}

const list = [
 {name: 'Сверстать этот TODO list', status: STATUS.TODO, priority: PRIORITY.HIGH},
 {name: 'Посмотреть ютубчик', status: STATUS.TODO, priority: PRIORITY.LOW}
];

// Array

const addTask = (taskName, userStatus, userPriority) => {
  let template = {};
  if(taskName) {
    template.name = taskName;
    template.status = userStatus;
    template.priority = userPriority;
    list.push(template);
  }
  render();
}

const changeStatus = (task, newStatus) => {
  list.forEach(elem => {
    if(elem.name === task) {
        elem.status = newStatus;
    }
  })
  render();
}

const remove = (task) => {
  list.forEach(elem => {
    if(elem.name === task) {
      const position = list.indexOf(elem);
      list.splice(position, 1);
    } 
  })
  render();
}

// UI DOM
function createDivTemplate(dataForm) {
  newElement = document.createElement('div');
  newElement.classList.add('task-box');
  newElement.insertAdjacentHTML('afterbegin', `<label class="label-checkbox-task">
                                               <input type="checkbox" class="input-checkbox-task">
                                               <span class="fake-checkbox"></span>
                                               </label>
                                               ${dataForm}                                           
                                               <span class="close-task-btn"></span>`
                                               );
  return newElement;                                     
}

function addUi(event) {
  event.preventDefault();
  let checkId;
  let dataForm;
  
  const checkPlusButton = event.target.outerHTML;
  if(!checkPlusButton.includes("forms")) {
    checkId = event.target.parentNode[0].id;
    dataForm = event.target.parentNode[0].value;
  } else {
    checkId = event.target[0].id;
    dataForm = event.target[0].value;
  }

  if(checkId === 'input-high') {
    createDivTemplate(dataForm);
    highBoxTodo.prepend(newElement);
    addTask(dataForm, STATUS.TODO, PRIORITY.HIGH);
  }

  if(checkId === 'input-low') {
    createDivTemplate(dataForm);
    lowBoxTodo.prepend(newElement);
    addTask(dataForm, STATUS.TODO, PRIORITY.LOW);
  }

  watchStatus(fakeCheckbox);
  watchRemoveBtns(closeTaskBtn);                             
}

function changeStatusUi(event) {
  const parentBox = event.target.parentNode.parentNode.parentNode;
  const taskBox = event.target.parentNode.parentNode
  const fakeCheckboxDone = event.target;
  const taskName = taskBox.innerText;
  if(!event.target.id) {
    taskBox.id = 'task-box_status-done';
    fakeCheckboxDone.id = 'fake-checkbox_status-done';
    if(parentBox.matches('.high-box_todo')) {
      highBoxDone.prepend(taskBox);
    } else {
      lowBoxDone.prepend(taskBox);
    }
    changeStatus(taskName, STATUS.DONE);
  } else {
    taskBox.removeAttribute('id');
    fakeCheckboxDone.removeAttribute('id');
    if(parentBox.matches('.high-box_done')) {
      highBoxTodo.prepend(taskBox);
    } else {
      lowBoxTodo.prepend(taskBox);
    }
    changeStatus(taskName, STATUS.TODO);
  }
}

function removeUi(event) {
  const taskBox = event.target.parentNode;
  const taskName = taskBox.innerText;
  taskBox.remove();

  remove(taskName);
}

// RENDER

function removeTasksRenderUI() {
  const allTasks = document.querySelectorAll('.task-box');
  for(const task of allTasks) {
    task.remove();
  }
}

function addTasksRenderUI() {
  list.forEach(elem => {
    createDivTemplate(elem.name);
    if(elem.priority === PRIORITY.HIGH && elem.status === STATUS.TODO) {
      highBoxTodo.prepend(newElement);
    } else if(elem.priority === PRIORITY.HIGH && elem.status === STATUS.DONE) {
      highBoxDone.prepend(newElement);
      newElement.id = 'task-box_status-done';
      newElement.firstChild.childNodes[3].id = 'fake-checkbox_status-done';
    } else if(elem.priority === PRIORITY.LOW && elem.status === STATUS.TODO) {
      lowBoxTodo.prepend(newElement);
    } else {
      lowBoxDone.prepend(newElement);
      newElement.id = 'task-box_status-done';
      newElement.firstChild.childNodes[3].id = 'fake-checkbox_status-done';
    }
  })
  watchStatus(fakeCheckbox);
  watchRemoveBtns(closeTaskBtn); 
}

function render() {
  removeTasksRenderUI();
  addTasksRenderUI();
}

//  WATCH EVENT LISTENER

function watchForms(forms) {
  for(const elem of forms) {
    elem.addEventListener('submit', addUi);
  }
}

function watchAddTaskBtn(addTaskBtn) {
  for(const elem of addTaskBtn) {
    elem.addEventListener('click', addUi);
  }
}

function watchStatus(fakeCheckbox) {
  for(let elem of fakeCheckbox) {
    elem.addEventListener('click', changeStatusUi);
  }
}

function watchRemoveBtns(closeTaskBtn) {
  for(let elem of closeTaskBtn) {
    elem.addEventListener('click', removeUi);
  }
}

watchForms(forms);
watchAddTaskBtn(addTaskBtn);
watchStatus(fakeCheckbox);
watchRemoveBtns(closeTaskBtn);
