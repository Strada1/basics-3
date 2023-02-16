const Status = {
    TO_DO: 'to do',
    IN_PROGRESS: 'in progress',
    DONE: 'done',
};

const Priority = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGHT: 'hight',
};


const list = [
    { name: 'feed a cat', status: Status.IN_PROGRESS, priority: Priority.HIGHT },
    { name: 'do some work', status: Status.TO_DO, priority: Priority.HIGHT },
    { name: 'go gym', status: Status.DONE, priority: Priority.LOW },
    { name: 'beat boss', status: Status.TO_DO, priority: Priority.MEDIUM },
    { name: 'make a dinner', status: Status.IN_PROGRESS, priority: Priority.MEDIUM },
];

function Namecheck(TaskName) {
    const result = (list.filter(item => item.name === TaskName));
    return result
}; // передает в аргумент название таски для проверки на дубликат

function Statuscheck(TaskStatus) {
    return TaskStatus === Status.TO_DO || TaskStatus === Status.IN_PROGRESS || TaskStatus === Status.DONE;
}; // проверка статуса задачи на допустимый лист статусов

function Prioritycheck(TaskPriority) {
    return TaskPriority === Priority.LOW || TaskPriority === Priority.MEDIUM || TaskPriority === Priority.HIGHT;
}; // проверка приоритетов на допустимость

function addTask(TaskName, TaskStatus, TaskPriority) {
    if (Namecheck(TaskName).length > 0 || TaskName === '') {

        return console.log('не введено названия задачи или задача таким именем существует'); // выполнена проверка на длину массива, если >1 значит были дубликаты
    }
    else if (Statuscheck(TaskStatus.toLowerCase()) === false) {
        return console.log('не введен корректный статус задачи');
    }
    else if (Namecheck(TaskName).length === 0 && Statuscheck(TaskStatus.toLowerCase()) === true && Prioritycheck(TaskPriority) === false) {
        return list.push({
            name: TaskName,
            status: TaskStatus,
            priority: Priority.LOW, // устанавливает приоритет LOW, если другой не назначен
        });
    }
    list.push({
        name: TaskName,
        status: TaskStatus,
        priority: TaskPriority,
    });
}
function changeTask(TaskName, TaskStatus, TaskPriority) {
    const TaskPos = list.findIndex(item => item.name === TaskName);
    if (Statuscheck(TaskStatus) && Prioritycheck(TaskPriority)) {
        list[TaskPos].status = TaskStatus;
        list[TaskPos].priority = TaskPriority;
    }
    else {
        console.log('Проверьте заданные аргументы');
    }
}
function deleteTask(TaskName) {
    const TaskPos = list.findIndex(item => item.name === TaskName);
    list.splice(TaskPos, 2);
}

function test(status) {     //передает стрингу с названием статуса и возвращет число для последующей сортировки
    if (status === 'to do') {
        return 1
    }
    else if (status === 'in progress') {
        return 2
    }
    else if (status === 'done') {
        return 3
    }
}

function sortirovka(a, b) {     // аргументы принимают целый объект внутри массива, затем используется функция тест для проверки по статусу и приваивания числа
  return test(a.status) - test(b.status);
    }

deleteTask('beat boss');
addTask('go gum', 'done', '');
changeTask('go gym', 'in progress', 'medium');

const showlist = list.sort(sortirovka);

console.log(showlist);