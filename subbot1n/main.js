const list = {
	"create a new practice task": "In Progress", 
	"make a bed": "Done",
	"write a post": "To Do",
};
const STATUS = {
    TO_DO: "To Do",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
}
const defaultTaskStatus = STATUS.TO_DO;

function changeStatus(task,taskStatus){ 
    list[task] = taskStatus;
};

function addTask(task){
    if (task in list){
    console.log('task already exists')   // задача уже существует 
     } else list[task] = defaultTaskStatus;
    console.log('task added') // задача добавлена
};

function deleteTask(task){
    if (task in list){
    delete list[task];
    console.log('task deleted');// задача удалена
    } else console.log('no such task exists'); // такой задачи не существует
};

function showList(){
let todoList='';
let inProgressList='';
let doneList='';
    for (const name in list){
        if (list[name] == STATUS.TO_DO){
        todoList += (`${name}\n`)
        } else if (list[name] == STATUS.IN_PROGRESS){
        inProgressList += (`${name}\n`)
        } else if (list[name] == STATUS.DONE){
        doneList += (`${name}\n`)
        }
    }
    if (todoList == '') todoList = '-\n';
    if (inProgressList == '' ) inProgressList = '-\n';
    if (doneList == '') doneList = '-\n';
console.log(`${STATUS.TO_DO}:\n${todoList}${STATUS.IN_PROGRESS}:\n${inProgressList}${STATUS.DONE}:\n${doneList}`);
};

changeStatus("write a post", "Done");
addTask('have a walk');
addTask('have a walk');
deleteTask('have a walk');
deleteTask('have a walk');
changeStatus('have a walk',"In Progress"); 
// changeStatus('have a walk',"Good"); //Unknown status
showList();