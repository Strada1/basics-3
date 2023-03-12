// Потом надо научиться использовать insertAdjancentHTML
// Edit: не надо
// Нужно также удалять eventListener'ы removeEventListener

import { objects } from './ToDohtmlObjects.js'
import { ToDo } from './ToDoMassives.js';

const { forms, inputsInForms, priorityDivs, divMarkedAsReadyDivs } = objects;

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

    render();
}

function removeTask(event) {
    // event.target - это кнопка с классом "deleteTaskButton"
    event.target.removeEventListener(); // Добавил
    const name = event.target.parentElement.firstElementChild.lastElementChild.textContent;
    ToDo.deleteTask(name);
    render();
}

function markAsReadyTask(event) {
    const name = event.target.nextElementSibling.textContent;
    const theTask = ToDo.list.find(task => task["taskName"] === name)
    if (theTask.status.toLowerCase() === "done") {
        ToDo.changeStatus(name, "ToDo");
    } else {
        ToDo.changeStatus(name, "Done");
    }
    render();
}

function render() {
    const divsToRemove = document.querySelectorAll('div.task');
    divsToRemove.forEach(div => {
        div.remove(); 
    });
    ToDo.showList(priorityDivs[0], priorityDivs[1], divMarkedAsReadyDivs);
}

export const functions = {createNewTask, removeTask, markAsReadyTask}