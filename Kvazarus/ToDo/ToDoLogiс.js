/*
Не писать функции в функциях
в addEventListener лучше не пользоваться стрелочными функциями
чем больше модулей, тем лучше
создавать пространство имён
создавать глобальные константы document.getElement...
*/

// Потом надо научиться использовать insertAdjacentHTML

import { objects } from './ToDohtmlObjects.js';

const { forms, inputsInForms, priorityDivs } = objects;

function createNewTask(event) {
    event.preventDefault();

    let bigCrutchIndex = -1;

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
    console.log(inputValue);
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

    newSpan.textContent = inputValue;
    newDiv2.appendChild(newButton);
    newDiv2.appendChild(newSpan);

    newDiv1.appendChild(newDiv2);
    newDiv1.appendChild(newButton2);

    priorityDivs[bigCrutchIndex].appendChild(newDiv1)
    // Также с помощью большого костыля находим див и вставляем новый
}

forms.forEach((form) => {
    form.addEventListener('submit', createNewTask);
})