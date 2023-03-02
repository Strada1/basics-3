const addButtonElement = document.body.querySelector('.button-add');
const highPriorityForm = document.body.querySelector('.high-priority-form');
const lowPriorityForm = document.body.querySelector('.low-priority-form');
const taskConteinerHigh = document.body.querySelector('.task-conteiner-high');
const taskConteinerLow = document.body.querySelector('.task-conteiner-low');


highPriorityForm.addEventListener('submit', (e) => addTask(e));
lowPriorityForm.addEventListener('submit', (e) => addTask(e));
addButtonElement.addEventListener('click', (e) => addTask(e));


const STATUSES = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In Progress',
    DONE: 'Done',
}

const PRIORITIES = {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
}

const list = [];


function createNewTaskElement(newTaskNameParameter, isChecked, textDecoration) {
    const newTaskElement = `<label class="task">
    <input class="visually-hidden task-checkbox" type="checkbox" name="high" value="first-value" ${isChecked}>
    <span class="task-mark"></span>
    <span class="task-label" ${textDecoration}>${newTaskNameParameter}
    </span>
    <button class="button button-delete">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="-0.5" x2="20.7803" y2="-0.5" transform="matrix(0.710506 0.703691 -0.65218 0.758064 0 1)"
    stroke="#998899" />
    <line y1="-0.5" x2="20.8155" y2="-0.5" transform="matrix(0.693335 -0.720616 0.670126 0.742247 1 16)"
    stroke="#998899" />
    </svg>
    </button>
    </label>`
    return newTaskElement;
}

function addTask(e) {
    const target = e.target.querySelector('.input-adding-task');
    const priority = e.target.querySelector('.priority-title');
    const insertPosition = target.parentElement.nextElementSibling;
    newTaskNameParameter = target.value;
    const errorMessage = target.parentElement.parentElement.querySelector('.error-msg');
    if (list.find(item => item.name === target.value)) {
        e.preventDefault();
        errorMessage.textContent = 'такая задача уже есть';
    } else if (!target.value) {
        e.preventDefault();
        errorMessage.textContent = 'введите задачу';
    } else {
        if (errorMessage) {
            errorMessage.textContent = '';
        }
        e.preventDefault();
        insertPosition.insertAdjacentHTML('afterbegin', createNewTaskElement(newTaskNameParameter, isChecked = STATUSES.TO_DO, textDecoration = ''));
        list.push({ name: target.value, status: isChecked, priority: priority.textContent });
        render();
    }
    target.value = '';
}

function render() {
    const taskArray = document.body.querySelectorAll('.task');
    const deleteButtons = document.getElementsByClassName('button-delete');
    taskArray.forEach(item => item.remove());

    list.forEach(item => {
        newTaskNameParameter = item.name;
        if (item.status === STATUSES.TO_DO) {
            isChecked = '';
            textDecoration = '';
        } else {
            isChecked = 'checked';
            textDecoration = 'style="text-decoration: line-through"';
        }
        if (item.priority === PRIORITIES.HIGH) {
            taskConteinerHigh.insertAdjacentHTML('afterbegin', createNewTaskElement(newTaskNameParameter, isChecked, textDecoration));
        } else {
            taskConteinerLow.insertAdjacentHTML('afterbegin', createNewTaskElement(newTaskNameParameter, isChecked, textDecoration));
        }
    })
    for (let button of deleteButtons) {
        button.addEventListener('click', deleteTask);
    }
    const checkboxButtons = document.querySelectorAll('input[type=checkbox]');

    for (let check of checkboxButtons) {
        check.addEventListener('change', changeStatus);
    }
}

function changeStatus() {
    const taskName = this.parentElement.querySelector('.task-label').textContent.trim();
    if (this.checked) {
        list.find(item => item.name === taskName).status = STATUSES.DONE;
        this.parentElement.querySelector('.task-label').setAttribute('style', "text-decoration: line-through");
    } else {
        list.find(item => item.name === taskName).status = STATUSES.TO_DO;
        this.parentElement.querySelector('.task-label').setAttribute('style', "text-decoration: none");
    }
    render();
}

function deleteTask(task) {
    task = this.parentElement.querySelector('.task-label').textContent.trim();
    list.splice([list.findIndex(item => item.name === task)], 1);
    this.parentElement.remove();
    render();
}

// function isValidTask(task) {
//     return list.find(item => item.name === task);
// }

// function isValidStatus(status) {
//     return status == STATUSES.TO_DO || status == STATUSES.IN_PROGRESS || status == STATUSES.DONE;
// }

// function changeStatus(task, status) {
//     if (isValidTask(task) && isValidStatus(status)) {
//         list.find(item => item.name === task).status = status;
//     } else {
//         console.log('There\'s no such task or status.');
//     }
// }

// function addTask(task) {
//     if (isValidTask(task)) {
//         console.log('This task already exists!')
//     } else {
//         list.push({ name: task, status: STATUSES.TO_DO, priority: PRIORITIES.LOW });
//     }
// }

// function deleteTask(task) {
//     if (isValidTask(task)) {
//         list.splice([list.findIndex(item => item.name === task)], 1);
//     } else {
//         console.log('There\'s no such task.')
//     }
// }

// function showListByStatus() {
//     list.sort(function (a, b) {
//         let textA = a.name.toUpperCase();
//         let textB = b.name.toUpperCase();
//         return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
//     });

//     for (let prop in STATUSES) {
//         let isEmptyStatus = true;
//         console.log(`${STATUSES[prop]}:`)
//         for (let task of list) {
//             if (task.status === STATUSES[prop]) {
//                 console.log(`\t${task.name}`);
//                 isEmptyStatus = false;
//             }
//         }
//         if (isEmptyStatus) console.log(`\t-`);
//     }
// }

// function showListByPriority() {
//     list.sort(function (a, b) {
//         let textA = a.name.toUpperCase();
//         let textB = b.name.toUpperCase();
//         return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
//     });

//     for (let prop in PRIORITIES) {
//         let isEmptyPriority = true;
//         console.log(`${PRIORITIES[prop]}:`)
//         for (let task of list) {
//             if (task.priority === PRIORITIES[prop]) {
//                 console.log(`\t${task.name}`);
//                 isEmptyPriority = false;
//             }
//         }
//         if (isEmptyPriority) console.log(`\t-`);
//     }
// }

// Проверки
// changeStatus('make a bed', STATUSES.IN_PROGRESS); //меняем статус задачи;
// changeStatus('make a BAD', STATUSES.TO_DO); //если задачи нет в списке, выдать сообщение
// changeStatus('make a bed', STATUSES.FINISHED); //меняем статус задачи на несуществующий

// addTask('feed the dog'); //добавляем задачу
// addTask('make a bed'); //если задача уже есть в списке, выдать сообщение

// deleteTask('make a bed'); //удаляем задачу
// deleteTask('make a BAD'); //если задачи нет в списке, выдать сообщение

// showListByStatus();
// showListByPriority();