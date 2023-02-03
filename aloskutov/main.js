let list = {
    todoList: {
        "create a new practice task": "In Progress",
        "make a bed": "Done",
        "write a post": "To Do",
    }
}
function showList() {
    for (const name in list) {
        console.log(name);
        console.log(list[name]);
    }
}
function addTask(name, stat) {
    list.todoList[name] = stat;
}
function deleteTask(name) {
    delete list.todoList[name];
}
function changeStatus(name, stat) {
    list.todoList[name] = stat;
}
deleteTask('make a bed');
addTask("write a program", 'In progress');
changeStatus('write a post', 'Done');
showList();
