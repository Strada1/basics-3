const STATUSES = {
    toDo: 'to do',
    inProgress: 'in progress',
    done: 'done',
};

const PRIORITIES = {
    low: 'low',
    medium: 'medium',
    high: 'high',
}

let list = [
    {name: 'make \'Todo\' using arrays', status: STATUSES.inProgress, priority: PRIORITIES.high},
    {name: 'do a workout', status: STATUSES.done, priority: PRIORITIES.high},
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


const changeStatusAndPriority = (taskList, task, status, priority) => {
    const element = taskList.find(element => element.name === task);
    if (!element) {
        return console.log('такой задачи в списке дел не обнаржуено');
    }
    if (element) {
         element.status = status ?? element.status;
         element.priority = priority ?? element.priority;
    }
    return element;
}

changeStatusAndPriority(list, 'routines');

const getStatusList = (taskList, status) => {
     return console.log({
         [status]: (taskList
             .filter(task => task.status === status)
             .map(task => task.name).join(', ')) || 'nothing'
     })
}

const showTaskList = () => {
    getStatusList(list, STATUSES.toDo);
    getStatusList(list, STATUSES.inProgress)
    getStatusList(list, STATUSES.done)
}
showTaskList();

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