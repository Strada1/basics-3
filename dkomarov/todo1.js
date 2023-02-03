const Todo = "To Do";
const Done = "Done";
const InProgress = "In Progress";

const todoList = {
    "create a new practice task": InProgress, 
	"make a bed": Done, 
	"write a post": Todo,
};

function addTask(name) {
    todoList[name] = Todo;
};

function changeStatus(name, status) {
    if(name in todoList) {
        todoList[name] = status;
    }
};

function deleteTask(name) {
    if(name in todoList) {
        delete todoList[name];
    }
};

function defineStatus(status) {
        let count = 0;
        let key;
    for (key in todoList) {
        if (todoList[key] === status) {
            console.log(key + ': ' + status);
            count++;
        } else if (count === 0) {
            continue;
        }
    } 
    if (todoList[key] !== status && count === 0) {
        console.log('Nothing is ' + ' - ' + status);
            
    } 
    
};


function showList() {
    defineStatus(Todo);
    defineStatus(Done);
    defineStatus(InProgress);
    
}

addTask("take a walk");
addTask("check mail");
addTask("eating");
changeStatus("write a post", 'Done');
changeStatus("take a walk", 'Done');
changeStatus("check mail", 'Done');
changeStatus("eating", 'Done');
deleteTask("make a bed");
showList();


