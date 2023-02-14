const STATUSES = {
    TO_DO: 'To do',
    IN_PROGRES: 'In progress',
    DONE: 'Done'
};
const toDo = [
    {name: 'Have a breakfast', status: STATUSES.DONE}, 
    {name: 'Walk with the dog', status: STATUSES.TO_DO},
    {name: 'Create a new practice task', status: STATUSES.IN_PROGRES},
    {name: 'To cook dinner', status: STATUSES.TO_DO}, 
];
function isValidTask(task) {
    return toDo.find(toDoTask => toDoTask.name === task)
};
function isValidStatus(newStatus) {
    return newStatus == STATUSES.DONE || STATUSES.IN_PROGRES || STATUSES.TO_DO;
}
function addTask(task) {
    toDo.push({name: task, status: STATUSES.TO_DO});
};
function delTask(task) {
    if (isValidTask(task)) {
        toDo.splice([toDo.findIndex(toDoTask => toDoTask.name === task)], 1)
    } else console.log('There\`s not such task');
};
function changeStatus(task, newStatus) {
    if (isValidTask(task) && isValidStatus(newStatus)) {
        toDo.find(toDoTask => toDoTask.name === task).status = newStatus;
    } else console.log('There\`s not such status or task');
};
function showToDoList() {
    console.log('To do:');
    const toDoList = toDo.filter(word => word.status == STATUSES.TO_DO);
    if (toDoList == 0) {
        console.log('Nothing is to do');
    } else console.log(toDoList);
    console.log('In progress:');
    const inProgressList = toDo.filter(word => word.status == STATUSES.IN_PROGRES);
    if (inProgressList == 0) {
        console.log('Nothing is in progress');
    } else console.log(inProgressList);
    console.log('Done:');
    const doneList = toDo.filter(word => word.status == STATUSES.DONE);
    if (doneList == 0) {
        console.log('Nothing is done');
    } else console.log(doneList);
};

console.log(toDo);
addTask('Homework');
console.log(toDo);
addTask('Go to shopping');
console.log(toDo);
delTask('Go to shopping');
console.log(toDo);
changeStatus('Walk with the dog', 'Done');
console.log(toDo);
showToDoList(toDo);