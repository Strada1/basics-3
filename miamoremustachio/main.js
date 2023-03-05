import {
    PRIORITY,
    STATUS,
    highTaskForm,
    lowTaskForm,
    highTaskInput,
    lowTaskInput,
    highTasksBlock,
    lowTasksBlock
} from './constants.js';

const toDoList = [];

function addTask(event) {
    event.preventDefault();

    const formIsEmpty = (highTaskInput.value === '' && lowTaskInput.value === '');
    const bothFormsAreFilled = (highTaskInput.value && lowTaskInput.value);

    if (formIsEmpty) {
        alert('Please, write the task you want to add.');
        return;
    } else if (bothFormsAreFilled) {
        alert('You are trying to write several tasks at once!');
        return;
    };

    let taskName;
    let priority;

    if (highTaskInput.value) {
        taskName = highTaskInput.value;
        priority = PRIORITY.HIGH;
    } else if (lowTaskInput.value) {
        taskName = lowTaskInput.value;
        priority = PRIORITY.LOW;
    };

    let taskID = Math.round(Math.random() * 1e7);

    toDoList.push({task: taskName, priority: priority, status: STATUS.TO_DO, ID: taskID});

    render();
}

function changeStatus(event) {
    let checkboxArea = event.target.closest('.checkbox');
    if (!checkboxArea) {
        return;
    };

    let task = checkboxArea.closest('.task');
    let currentTaskID = task.getAttribute('taskID');

    let currentTask = toDoList.find((task => task.ID == currentTaskID));
    
    if (checkboxArea.hasAttribute('checked')) {
        currentTask.status = STATUS.TO_DO;
    } else {
        currentTask.status = STATUS.DONE;
    };

    render();
}

function deleteTask(event) {
    let deleteButtonArea = event.target.closest('.delete-button');
    if (!deleteButtonArea) {
        return;
    };

    let task = deleteButtonArea.closest('.task');
    let currentTaskID = task.getAttribute('taskID');

    let currentTaskIndex = toDoList.findIndex((task => task.ID == currentTaskID));

    toDoList.splice(currentTaskIndex, 1);

    render();
}

function render() {
    let allTasks = document.querySelectorAll('.task');
    for (let task of allTasks) {
        task.remove();
    };

    for (let task of toDoList) {
        let taskContainer = document.createElement('div');
            taskContainer.className = 'task';
            taskContainer.setAttribute('taskID', task.ID.toString());

        let label = document.createElement('label');
            label.className = 'check-task';

        let input = document.createElement('input');
            input.className = 'checkbox';
            input.type = 'checkbox';
            if (task.status == STATUS.DONE) {
                input.setAttribute('checked', '');
            };

        let taskText = document.createTextNode(task.task);

        taskContainer.append(label);
        label.append(input, taskText);
        label.insertAdjacentHTML('afterend', '<button class="delete-button">✕</button>');

        if (task.priority == PRIORITY.HIGH) {
            highTasksBlock.append(taskContainer);
        } else if (task.priority == PRIORITY.LOW) {
            lowTasksBlock.append(taskContainer);
        };

        lowTaskInput.value = '';
        highTaskInput.value = '';
    };
}

highTaskForm.addEventListener('submit', addTask);
lowTaskForm.addEventListener('submit', addTask);

document.body.addEventListener('click', changeStatus);
document.body.addEventListener('click', deleteTask);