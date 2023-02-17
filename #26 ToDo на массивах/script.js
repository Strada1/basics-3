const list = [
    { name: 'create a post', status: 'In progress', priority: 'low' },
    { name: 'test', status: 'Done', priority: 'high' }
];

function showTaks(arr) {
    arr.forEach(e => {
        console.log(`name : ${e.name}, status : ${e.status}, priority : ${e.priority}`);
    });
}

function addTask(name, status, priority) {
    list.push({name: name, status: status, priority: priority});
}

function deleteTask(name) {
    let index = list.findIndex(i => i.name === name);
    list.splice(index, 1);
}

addTask('полить цветы', 'toDo', 'medium');
deleteTask('create a post');
showTaks(list);