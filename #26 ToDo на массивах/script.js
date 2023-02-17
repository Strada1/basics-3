const list = [
    { name: 'create a post', status: 'In progress', priority: 'low' },
    { name: 'test', status: 'Done', priority: 'high' }
];

function showTasks(arr) {
    let done_tasks = 0;
    arr.forEach(e => {
        console.log(`name : ${e.name}, status : ${e.status}, priority : ${e.priority}`);
        if (e.status.toLowerCase() === 'done') done_tasks++;
    });
    if (done_tasks === 0) console.log('Nothing is done!');
}

function addTask(name, status, priority) {
    list.push({name: name, status: status, priority: priority});
}

function deleteTask(name) {
    let index = list.findIndex(i => i.name === name);
    list.splice(index, 1);
}

function changeTask(name, status) {
    let index = list.findIndex(i => i.name === name);
    list[index].status = status;
}

deleteTask('test');
addTask('do homework', 'done', 'low');
showTasks(list);
