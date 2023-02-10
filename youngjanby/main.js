const list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
    {name: 'test', status: 'Done', priority: 'high'} 
];

function changeStatus(name, status) {
    const IndexForChange = list.findIndex(list => list.name === name);
    list[IndexForChange].status = status;
}

function addTask(name, status, priority) {
    list.push({ name: name, status: status, priority: priority })
}

function deleteTask(name) {
    const IndexForDelete = list.findIndex(list => list.name === name);
    list.splice(IndexForDelete, 1);
}

function showList() {
    for(let show of list) {
        console.log(show)
    }
}


changeStatus('create a post', 'Done') // меняет статус задачи
addTask('have a walk', 'Done', 'Low'); // добавляет новую задачу
deleteTask('test'); // удаляет задачу
showList();