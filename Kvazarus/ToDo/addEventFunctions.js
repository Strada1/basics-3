// Потом надо научиться использовать insertAdjancentHTML

import { objects } from './ToDohtmlObjects.js'
import { ToDo } from './ToDoMassives.js';

const { forms, inputsInForms, priorityDivs } = objects;

function createNewTask(event) {
    event.preventDefault();

    let bigCrutchIndex;

    switch (event.target) {
        case forms[0]:
            bigCrutchIndex = 0;
            break;
        case forms[1]:
            bigCrutchIndex = 1;
            break;
    }

    const inputValue = inputsInForms[bigCrutchIndex].value;
    inputsInForms[bigCrutchIndex].value = "";
    // Большой костыль определяет в каком диве приоритетности находится инпут

    let result;
    if (bigCrutchIndex) {// 0 - first div "high", 1 - second div "low"
        result = ToDo.addTask(inputValue, "low");
    } else {
        result = ToDo.addTask(inputValue, "high");
    }

    if (result === "error") {return}

    const newDiv1 = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const newButton = document.createElement('button');
    const newSpan = document.createElement('span');
    const newButton2 = document.createElement('button');

    newDiv1.classList.add("task");
    newDiv2.classList.add("containing");
    newButton.classList.add("markAsReadyButton");
    newSpan.classList.add("ToDoText");
    newButton2.classList.add("deleteTaskButton");

    newButton.addEventListener('click', markAsReadyTask);
    newButton2.addEventListener('click', removeTask);

    newSpan.textContent = inputValue;
    newDiv2.appendChild(newButton);
    newDiv2.appendChild(newSpan);

    newDiv1.appendChild(newDiv2);
    newDiv1.appendChild(newButton2);

    priorityDivs[bigCrutchIndex].appendChild(newDiv1);
    // Также с помощью большого костыля находим див и вставляем новый
}

function removeTask(event) {
    // event.target - это кнопка с классом "deleteTaskButton"
    const name = event.target.parentElement.firstElementChild.lastElementChild.textContent;
    event.target.parentElement.remove(); // удаляет див с классом "task"
    ToDo.deleteTask(name);
}

function markAsReadyTask(event) {
    const name = event.target.nextElementSibling.textContent;
    ToDo.changeStatus(name, "Done");

    const markedAsReadyDiv = document.querySelector('div.markedAsReadyDivs');
    const taskDiv = event.target.parentElement.parentElement;
    markedAsReadyDiv.appendChild(taskDiv);
}

export const functions = {createNewTask, removeTask, markAsReadyTask}