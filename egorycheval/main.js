const InProgress = 'In Progress';
const Done = 'Done';
const ToDo = 'To Do';

const list = {
    'creat a new practice task': InProgress,
    'make a bed': Done,
    'write a post': ToDo,
}

function changeStatus(task, status) {
    if(task in list) {
        list[task] = status;
    }
}

function addTask(task) {
    list[task] = ToDo;
}

function deleteTask(task) {
    if(task in list) {
        delete list[task];
    }
}

function findTaskOnStatus(status) {
    let count = 0;
    let key;
    for (key in list) {
        if(list[key] === status) {
            console.log(key + ': ' + status);
            count++;
        } else if(count === 0) {
            continue;
        }
    }
    if(list[key] !== status && count === 0) {
        console.log('Nothing is ' + status);
    }
    console.log('\t');
}

function showList() {
    findTaskOnStatus(ToDo);
    findTaskOnStatus(InProgress);
    findTaskOnStatus(Done);
}




changeStatus('make a bed', 'Done');
addTask('play in PS5');
addTask('listen a music');
changeStatus('play in PS5', 'Done');
deleteTask('make a bed');

showList();


function findTaskOnStatusProVersion(status) {
    let count = 0;
    for (let key in list) {
        if(list[key] === status) {
            console.log('     ' + key);
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