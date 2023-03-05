import {todo} from './globalConsts.js';
import {buttonAddHigh} from './globalConsts.js';
import {buttonAddLow} from './globalConsts.js';
import {parentDivHigh} from './globalConsts.js';
import {parentDivLow} from './globalConsts.js';
import {isInList} from './secondaryFuncs.js';
import {taskId} from './secondaryFuncs.js';

buttonAddHigh.addEventListener('click',() => createObject(buttonAddHigh.previousElementSibling));
buttonAddLow.addEventListener('click', () => createObject(buttonAddLow.previousElementSibling));

function createObject(input) {
    const priority = input.getAttribute('data-priority') === 'high'? 'high' : 'low'
    if(input.value.length === 0){
        alert('Графа пуста');
        return;
    }
    if(isInList(input.value)) {
        alert('Такая задача уже есть в списке');
        return
    }
    const newTaskObject = {
        name:input.value,
        status:false,
        priority,
    }
    todo.push(newTaskObject);
    input.value='';
    render();
}

function render() {
    parentDivHigh.replaceChildren();
    parentDivLow.replaceChildren();
    createDiv()
}

function createDiv() {
    for(let itemOfArr of todo){
        const newTaskDiv = document.createElement('div');
        newTaskDiv.className = 'block-tasks__task';

        const newTaskCheckbox = document.createElement('input')
        newTaskCheckbox.setAttribute('type', 'checkbox');
        newTaskCheckbox.className = 'block-tasks__checkbox';
        newTaskCheckbox.addEventListener('click', () => changeStatus(newTaskCheckbox.checked, newTaskName.textContent));
        newTaskDiv.appendChild(newTaskCheckbox);

        const newTaskName = document.createElement('div');
        newTaskName.className = 'block-tasks__text';
        newTaskName.textContent = itemOfArr.name;
        newTaskDiv.appendChild(newTaskName);

        const newTaskDeleteButton = document.createElement('button');
        newTaskDeleteButton.className = 'block-tasks__delete-button button';
        newTaskDeleteButton.addEventListener('click', () => deleteTask(newTaskName.textContent, newTaskDeleteButton));
        newTaskDiv.appendChild(newTaskDeleteButton);

        if (itemOfArr.priority === 'high'){
            parentDivHigh.insertBefore(newTaskDiv, parentDivHigh.firstChild);
        } else {
            parentDivLow.insertBefore(newTaskDiv, parentDivLow.firstChild);
        }

        if(itemOfArr.status) {
            newTaskCheckbox.setAttribute('checked', '');
            newTaskName.style.textDecoration = 'line-through';
            newTaskName.style.color = 'grey';
            newTaskDiv.style.backgroundColor = 'darkgrey';
        }
    }
}

function deleteTask(taskName, newTaskDeleteButton){
    todo.splice(taskId(taskName), 1);
    newTaskDeleteButton.removeEventListener('click', deleteTask);
    render();
}

function changeStatus(status, taskName) {
    if(status){
        todo[taskId(taskName)].status = true;
    } else {
        todo[taskId(taskName)].status = false;
    }
    render();
}