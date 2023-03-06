const highButton = document.querySelector('#high-button');
const lowButton = document.querySelector('#low-button');
const highPriorityTask = document.getElementById('new-high-priority-task');
const lowPriorityTask = document.getElementById('new-low-priority-task');
const highTasksElements = document.querySelector('.high-priority-tasks .tasks');
const lowTasksElements = document.querySelector('.low-priority-tasks .tasks');
const tasksDiv = document.querySelectorAll('.tasks')
let taskCount = 0;


// МАССИВ ДЛЯ БУДУЩИХ ЗАДАЧ
const listofTasks = [{}];
showTasks()

// ФУНКЦИЯ ОТОБРАЖАЕТ НА СТРАНИЦЕ ВСЁ ЧТО ЕСТЬ В МАССИВЕ

function showTasks() {
    for (const zadachi of listofTasks) {
        if (zadachi.priority === 'high') {
            // Добавление поля и задачи
            const newHighTask = document.createElement('label');
            const newHighTaskInput = document.createElement('input');
            newHighTaskInput.type = 'checkbox';
            newHighTaskInput.name = 'high-priority-tasks';
            newHighTaskInput.value = zadachi.name;
            // Добавление кнопки удаления
            const newHighTaskButton = document.createElement('button');
            newHighTaskButton.classList.add('delete-btn');
            newHighTaskButton.textContent = 'X';
            newHighTask.append(newHighTaskInput, newHighTaskInput.value, newHighTaskButton);
            highTasksElements.append(newHighTask);
            highPriorityTask.value = '';
        } else if (zadachi.priority === 'low') {
            const newLowTask = document.createElement('label');
            const newLowTaskInput = document.createElement('input');
            newLowTaskInput.type = 'checkbox';
            newLowTaskInput.name = 'low-priority-tasks';
            newLowTaskInput.value = zadachi.name;
            const newLowTaskButton = document.createElement('button');
            newLowTaskButton.classList.add('delete-btn');
            newLowTaskButton.textContent = 'X';
            newLowTask.append(newLowTaskInput, newLowTaskInput.value, newLowTaskButton);
            lowTasksElements.append(newLowTask);
            lowPriorityTask.value = '';
        }
    }
}

// ФУНКЦИЯ ОЧИСТКИ DOM

function clearLists() {
    highTasksElements.innerHTML = '';
    lowTasksElements.innerHTML = '';
}

// ФУНКЦИЯ ДОБАВЛЕНИЯ ЗАДАЧ ПО ПРИОРИТЕТАМ

function addHighTask(event) {
    event.preventDefault();
    listofTasks.push({
        name: highPriorityTask.value,
        priority: 'high',
        status: 'todo',
        id: ++taskCount,
    })
    clearLists() // Очищает DOM перед каждым отображением задач
    showTasks()
}

function addLowTask(event) {
    event.preventDefault();
    listofTasks.push({
        name: lowPriorityTask.value,
        priority: 'low',
        status: 'todo',
        id: ++taskCount,
    })
    clearLists() // Очищает DOM перед каждым отображением задач
    showTasks()
}


highButton.addEventListener('click', addHighTask);
lowButton.addEventListener('click', addLowTask);

console.log(listofTasks);

// Обработчик событий для кнопок удаления задач

function deleteTask(event) {
    if (event.target.classList.contains('delete-btn')) {
        const zadachiName = event.target.parentNode.querySelector('input').value;
        listofTasks.splice(listofTasks.findIndex(zadachi => zadachi.name === zadachiName), 1);
        clearLists();
        showTasks();
    }
}

highTasksElements.addEventListener('click', deleteTask);
lowTasksElements.addEventListener('click', deleteTask);

function completeTask(event) {
    event.preventDefault();
    for (const zadachi of listofTasks) {
        if (zadachi.id === taskName) {
            zadachi.status = 'Закончено'
        }
    }
}







































/* TODO на МАССИВАХ
const listofTasks = [{
        name: 'Задача 1',
        status: 'Закончено',
        priority: 'Высокая',
    },

];

let defaultStatus = 'todo';

// Функция ДОБАВЛЕНИЯ задачи в массив
console.log('___________________________________ ФУНКЦИЯ ДОБАВЛЕНИЯ');

function addTask(taskName, taskPriority) {
    if (taskPriority === undefined) {
        listofTasks.push({
            name: taskName,
            status: defaultStatus,
            priority: 'Низкий'
        })
        console.log(`${taskName} успешно добавлена. Приоритет по умолчанию: НИЗКИЙ`);
    } else {
        listofTasks.push({
            name: taskName,
            status: defaultStatus,
            priority: taskPriority
        })
        console.log(`${taskName} успешно добавлена`);
    }
}

// Функция ЗАВЕРШЕНИЯ задачи в массиве
console.log('___________________________________ ФУНКЦИЯ ИЗМЕНЕНИЯ');

function completeTask(taskName) {
    for (const zadachi of listofTasks) {
        if (zadachi.name === taskName) {
            zadachi.status = 'Закончено'
        }
    }
}


// Функция ИЗМЕНЕНИЯ задачи в массиве, в т.ч и СТАТУСА
console.log('___________________________________ ФУНКЦИЯ ИЗМЕНЕНИЯ');

function changeTask(name, newTaskName, newTaskPriority) {
    for (const zadachi of listofTasks) {
        if (zadachi.name === name) {
            zadachi.name = newTaskName;
            zadachi.priority = newTaskPriority || 'Низкий';
            console.log(`Вы успешно добавили задачу ———————— ${newTaskName}`);
        }
    }
}


// Функция УДАЛЕНИЯ задачи в массиве
console.log('___________________________________ ФУНКЦИЯ УДАЛЕНИЯ');

function deleteTask(nameTask) {
    for (const zadachi of listofTasks) {
        if (zadachi.name === nameTask) {
            listofTasks.splice(listofTasks.indexOf(zadachi), 1)
            console.log(`Вы успешно удалили задачу ———————— "${nameTask}"`);
        }
    }
}
// Функция ВЫВОДА задач в массиве в консоль
console.log(`___________________________________ ФУНКЦИЯ ВЫВОДА ЗАДАЧ'`);

function showTasks() {
    for (const zadachi of listofTasks) {
        console.log(`${zadachi.name} ----- ${zadachi.status} ----- ${zadachi.priority}`);
    }
}

// МЕТОДЫ ДЛЯ ПРОГРАММЫ TODO НА МАССИВАХ
// addTask(название, приоритет) — метод добавления задачи (если без приоритета — по умолчанию низкий)
// completeTask(название) — метод изменения статуса задачи
// changeTask(название, название для замены, приоритет) — метод изменения задачи
// deleteTask(название) — метод удаления задачи
// showTasks() — метод отображения задач
*/