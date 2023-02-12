
const STATUS = {
    'TO_DO': 'to do',
    'IN_PROGRESS': 'In progress',
    'DONE': 'done',
}

const tasks = [
    { taskName: 'task1', taskStatus: STATUS.IN_PROGRESS },
    { taskName: 'task2', taskStatus: STATUS.TO_DO },
    { taskName: 'task3', taskStatus: STATUS.TO_DO },
    { taskName: 'task4', taskStatus: STATUS.DONE },
];

function showTask() {
    console.log('-'.repeat(100));
    tasks.forEach(task => console.log(`${task.taskName}: ${task.taskStatus}`));
}

function addTask(name) {
    if (!name) {
        console.log('Задача не может быть пустой');
        return;
    }

    const result = tasks.find(item => item.taskName === name);

    if (result) {
        console.log(`Задача "${name}" уже есть в списке`)
    } else {
        tasks.push({ taskName: name, taskStatus: STATUS.TO_DO });
        console.log(`Задача "${name}" добавлена`);
    }
}

function changeTask(name, status) {
    if (!name) {
        console.log('Для изминения статуса задача не может быть пустой');
        return;
    }

    const result = tasks.find(item => item.taskName === name);

    if (result.taskStatus === status) {
        console.log(`Задача "${name}" уже имеет статус "${status}"`);
        return;
    }

    if (result) {
        result.taskStatus = status;
        console.log(`Статус задачи "${name}" изменён на "${status}"`);
    } else {
        console.log(`Задачи "${name}" в списке нет: невозможно изменить статус`);
    }
}

function deleteTask(name) {
    if (!name) {
        console.log('Задача не может быть пустой');
        return;
    }
    const result = tasks.findIndex(item => item.taskName === name);
    if (result) {
        tasks.splice(result, 1);
        console.log(`Задача "${name}" удалена`);
    }
}

addTask('task5');
addTask('task6');
addTask('task4');
addTask();

changeTask('task5', STATUS.IN_PROGRESS);
changeTask('task2', STATUS.TO_DO);

deleteTask('task3');

showTask();

