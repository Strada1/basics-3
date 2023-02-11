const todoList = [
    {name:'go to university', status:'To Do', priority:'low'},
    {name:'perform a task', status:'In progress', priority:'high'},
    {name:'eat up', status:'To Do', priority:'high'},
    {name:'write a diploma', status:'In progress', priority:'high'}
];
function changeStatus (nameTask, nameStatus, namePriority) {
   const statusChange = todoList.findIndex(task => task.name === nameStatus);
   todoList[statusChange] = {name:nameTask, status:nameStatus, priority:namePriority}
};
function deleteTask(index1, index2) {
    todoList.splice(index1, index2)
};
function addTask(task) {
    todoList.unshift(task)
};


function showList() {
    const filterStatusDone = todoList.filter(todoList => todoList.status === 'Done')
    if (filterStatusDone.length === 0) {
        console.log('\nNothing is \'Done\'');
    } else {
        filterStatusDone.forEach(todoList => {
            console.log(`Done: \n\ ${todoList.name}: ${todoList.priority}`);
        });
    }
    
       
    const filterStatusInprogress = todoList.filter(todoList => todoList.status ==='In progress')
    if (filterStatusInprogress.length === 0) {
        console.log('\nNothing is \'In Progress\'');
    } else {
        filterStatusInprogress.forEach(todoList => {
            console.log(`In progress: \n\ ${todoList.name}: ${todoList.priority}`);
        });
    }
       
    
    const filterStatusTodo = todoList.filter(todoList => todoList.status === 'To Do')
    if (filterStatusTodo.length === 0) {
        console.log('\nNothing is \'To Do\'');
    } else {
        filterStatusTodo.forEach(todoList => {
            console.log(`To Do:  \n\ ${todoList.name}:  ${todoList.priority} `);
        });
    }
};
changeStatus('go to home', 'Done', 'low')
deleteTask(0 ,0)
addTask({name:`don't die`, status:'To Do', priority:'high'})
showList()