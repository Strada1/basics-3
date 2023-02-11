const STATUSES = {
    toDo: 'ToDo',
    inProgress: 'In progress',
    done: 'Done',
};

const PRIORITIES = {
    low: 'low',
    medium: 'medium',
    high: 'high',
}

let list = [
    {name: 'make \'Todo\' using arrays', status: STATUSES.inProgress, priority: PRIORITIES.high},
    {name: 'do a workout', status: STATUSES.done, priority: PRIORITIES.high},
    {name: 'do a workout', status: STATUSES.inProgress, priority: PRIORITIES.high},
    {name: 'do a workout', status: STATUSES.toDo, priority: PRIORITIES.high},
    {name: 'make dinner', status: STATUSES.toDo, priority: PRIORITIES.medium},
    {name: 'routines', status: STATUSES.toDo, priority: PRIORITIES.low},
    {name: 'study technical specification to the project', status: STATUSES.done, priority: PRIORITIES.high},
];

const deleteTask = (taskList, task) => {
    if (taskList.find(element => element.name === task)) {
        return list = taskList.filter(listItem => listItem.name !== task)
    }
    console.log('такой задачи в списке дел не обнаржуено')
}

deleteTask(list, 'make dinner');

const addTask = (taskList, task, priority) => {
  taskList.push({name: task, status: STATUSES.toDo, priority: priority})
}
addTask(list, 'read a fiction',  PRIORITIES.low);

//функции changeStatus и changePriority не отвечают концепции не повторять себя, но не успела решить как отказаться от этого
const changeStatus = (taskList, task, status) => {
    const element = taskList.find(element => element.name === task);
    if (!element) {
        return console.log('такой задачи в списке дел не обнаржуено');
    }
    if (element) {
         element.status = status ?? element.status;
    }
    return element;
}

changeStatus(list, 'routines', STATUSES.inProgress);

const changePriority = (taskList, task, priority) => {
    const element = taskList.find(element => element.name === task);
    if (!element) {
        return console.log('такой задачи в списке дел не обнаржуено');
    }
    if (element) {
        element.priority = priority ?? element.priority;
    }
    return element;
}

changePriority(list, 'routines', PRIORITIES.high);

const getStatusList = (taskList, status) => {
    if (status) {
        status = (taskList
            .filter(task => task.status === status)
            .map(task => task.name).join(', ')) || '-'
    }
    return status;
}

//вывод статусов и задач просто в консоль
const showTaskList = () => {
    return console.log(`${STATUSES.toDo}:
${getStatusList(list, STATUSES.toDo)}
${STATUSES.inProgress}:
${getStatusList(list, STATUSES.inProgress)}
${STATUSES.done}:
${getStatusList(list, STATUSES.done)}`);
}
showTaskList();

//вывод статусов в один объект в консоль
const showTaskList2 = () => {
    return console.log({
        [STATUSES.toDo]: getStatusList(list, STATUSES.toDo),
[STATUSES.inProgress]: getStatusList(list, STATUSES.inProgress),
    [STATUSES.done]: getStatusList(list, STATUSES.done),

})
}
showTaskList2();
//решение через метод reduce, не могу решить пролему с висячей запятой и пробелом, остальное все по ТЗ, подскажите как решить задачу через reduce
const showList = (taskList) => {
    const statusList =  taskList.reduce((obj, task) => {
        let {name, status} = task;
        obj[status] = (obj[status] || '') +  name + ', ';
        return obj;
    }, {})
    console.log(statusList);
}

showList(list);
