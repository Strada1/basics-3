const InProgress = 'In Progress';
const Done = 'Done';
const ToDo = 'To Do';


const list = [
    {name: 'create a post', status: 'In progress', priority: 'low'},
    {name: 'test', status: 'Done', priority: 'high'}
];

function changeStatus(task, status) {
    let findTask = list.find(list => list.name === task);
    findTask.status = status;
}

function changePriority(task, priority) {
    let findTask = list.find(list => list.name === task);
    findTask.priority = priority;
}

function addTask(task, priority) {
    list.push({name: task, status: ToDo, priority: priority});
}

function deleteTask(task) {
    let findIndex = list.findIndex(list => list.name === task);
    list.splice(findIndex, 1);
}

function findTaskOnStatus(status) {
    let count = 0;
    let key;
    for (key of list) {
        if(key.status === status) {
            console.log(key.name + ': ' + status);
            count++;
        } else if(count === 0) {
            continue;
        }
    }

    if(key.status !== status && count === 0) {
        console.log('Nothing is ' + status);
    }
    console.log('\t');
}

function showList() {
    findTaskOnStatus(ToDo);
    findTaskOnStatus(InProgress);
    findTaskOnStatus(Done);
}

addTask('learning in starda', 'high');
addTask('go to street', 'low');
changeStatus('test', 'To Do');
changeStatus('go to street', 'Done');
changePriority('go to street', 'high');
deleteTask('create a post');

showList();





function findTaskOnStatusProVersion(status) {
    let count = 0;
    for (let key of list) {
        if(key.status === status) {
            console.log('     ' + key.name);
            count++;
        }
    }
    if(count === 0) {
        console.log('-')
    }
}

function showListProVersion() {
    console.log('ToDo:\t');
    findTaskOnStatusProVersion(ToDo);
    console.log('In Progress:\t');
    findTaskOnStatusProVersion(InProgress);
    console.log('Done:\t');
    findTaskOnStatusProVersion(Done);
}

showListProVersion();

