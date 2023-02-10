const list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
    {name: 'test', status: 'Done', priority: 'high'},
    {name: 'create s ToDo List', status: 'Done', priority: 'high'}
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
    const filterForDone = list.filter(list => list.status === 'Done');
    const filterForToDo = list.filter(list => list.status === 'ToDo');
    const filterForInProgress = list.filter(list => list.status === 'In Progress')
    
    
        if (filterForDone.length <= 0) {
            console.log('Nothing is \'Done\'')
        } else if (filterForDone.length >= 1) {
            console.log(filterForDone)
        };


        if (filterForInProgress.length <= 0) {
            console.log('Nothing is \'In Progress\'')
        } else if (filterForInProgress.length >= 1) {
            console.log(filterForInProgress)
        };
    


        if (filterForToDo.length <= 0) {
            console.log('\nNothing is \'ToDo\'')
        } else if (filterForToDo.length >= 1) {
            console.log(filterForToDo)
        };
}

changeStatus('create a post', 'In Progress') // меняет статус задачи
addTask('have a walk', 'Done', 'Low'); // добавляет новую задачу
deleteTask('test'); // удаляет задачу
showList()