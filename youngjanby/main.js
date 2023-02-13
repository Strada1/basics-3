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

    let ToDoListCount = 0;
    let InProgressListCount = 0;
    let DoneListCount = 0;

    for (let ListDone of filterForDone) {
        if(filterForDone.length >= 1 && DoneListCount === 0) {
            DoneListCount++;
            console.log(`\n\"${ListDone.name}\" : ${ListDone.status}. Priority: ${ListDone.priority}`)
        } else if (filterForDone.length >= 1 && DoneListCount >= 1) {
            DoneListCount++;
            console.log(`\"${ListDone.name}\" : ${ListDone.status}. Priority: ${ListDone.priority}`)
        }
    }

    for (let InProgressList of filterForInProgress) {
        if(filterForInProgress.length >= 1 && InProgressListCount === 0) {
            InProgressListCount++;
            console.log(`\n\"${InProgressList.name}\" : ${InProgressList.status}. Priority: ${InProgressList.priority}`)
        } else if (filterForInProgress.length >= 1 && InProgressListCount > 0) {
            InProgressListCount++;
            console.log(`\"${InProgressList.name}\" : ${InProgressList.status}. Priority: ${InProgressList.priority}`)
        }
    }

    for (let ToDoList of filterForToDo) {
        if(filterForToDo.length >= 1 && ToDoListCount === 0) {
            ToDoListCount++;
            console.log(`\n\"${ToDoList.name}\" : ${ToDoList.status}. Priority: ${ToDoList.priority}`);
        } else if(filterForToDo.length >= 1 && ToDoListCount > 0) {
            ToDoListCount++;
            console.log(`\"${ToDoList.name}\" : ${ToDoList.status}. Priority: ${ToDoList.priority}`);   
        }
    }

    if(filterForDone.length < 1) {
        console.log('\nNothing \'is Done\'');
    };
    if (filterForInProgress.length <= 0 ) {  
        console.log('\nNothing is \'In Progress\'')
    }
    if (filterForToDo.length <= 0) {  
        console.log('\nNothing is \'ToDo\'')  
    }

}


 



changeStatus('create a post', 'In Progress') // меняет статус задачи
addTask('have a walk', 'Done', 'Low'); // добавляет новую задачу
deleteTask('test'); // удаляет задачу
showList()