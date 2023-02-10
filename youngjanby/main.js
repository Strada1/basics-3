let toDoList = ['почитать', 'помыть посуду', 'помыть машину']



function addTaskInToDoList(addTask) {
    toDoList.push(addTask)
}

function deleteTaskInToDoList(pos, defPos) {
    defPos = 1;
    deleteTask = toDoList.splice(pos);
}

function showTasksInToDoList() {
    for(let showAllTasks of toDoList) {
        console.log(showAllTasks)
    }
}


addTaskInToDoList('добавить новый таск');
deleteTaskInToDoList(3);
showTasksInToDoList()