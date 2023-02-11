/*
// Переписать программу TODO на объектах. Хранить все “задачи” в массиве и использовать методы массива чтобы добавлять, удалять, менять и выводить задачи.

const zadachi = ['Задача 1', 'Задача 2', 'Задача 3', 'Задача 4', ]

// Задаем переменную, которую будут принимать методы добавления/удаления/замены задач
let nazvZadachi = 'Новая/Измененная задача';
// Метод добавления задачи (в конец массива)
zadachi.push(nazvZadachi);
console.log(zadachi);

// Метод удаления задачи (с конца массива)
zadachi.pop();
console.log(zadachi);

// Метод замены задачи с указанием адреса, где надо менять
zadachi.splice(1, 1, nazvZadachi);
console.log(zadachi);

// Метод вывода всех задач в массиве
for (const vivodZadach of zadachi) {
    console.log(vivodZadach);
}
*/

const listofTasks = [{
        name: 'Задача 1',
        status: 'Закончено',
        priority: 'Высокая',
    },

];

let defaultStatus = 'Не начато';

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

addTask('Задача 2', 'Высокая')
addTask('Задача 3')
addTask('Задача 4')
console.log(listofTasks);
changeTask('Задача 2', 'Задача 002', 'Низкий')
console.log(listofTasks);
deleteTask('Задача 002')
console.log(listofTasks);
completeTask('Задача 4')
completeTask('Задача 3')
showTasks()