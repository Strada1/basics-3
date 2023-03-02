/*
Не писать функции в функциях
в addEventListener лучше не пользоваться стрелочными функциями
чем больше модулей, тем лучше
создавать пространство имён
создавать глобальные константы document.getElement...
*/

// Потом надо научиться использовать insertAdjacentHTML

import { objects } from './ToDohtmlObjects.js';
import { ToDo } from './ToDoMassives.js';
import { functions } from './addEventFunctions.js'

const { forms, inputsInForms, priorityDivs, divMarkedAsReadyDivs } = objects;

forms.forEach((form) => {
    form.addEventListener('submit', functions.createNewTask);
})

if (divMarkedAsReadyDivs.firstElementChild === divMarkedAsReadyDivs.lastElementChild) {// Елси единственным элементом является заголовок
    divMarkedAsReadyDivs.style.display = "none";
} else {
    divMarkedAsReadyDivs.style.display = "flex";
}