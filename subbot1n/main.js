const list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
    {name: 'cleaning', status: 'Done', priority: 'high'}, 
];
const STATUS = {
    TO_DO: "To Do",
    IN_PROGRESS: "In progress",
    DONE: "Done",
};
const PRIORITY = {
    LOW: 'low',
    HIGH: 'high',
};
const defaultTaskStatus = STATUS.TO_DO;
const defaultTaskPriority = PRIORITY.LOW;

function addTask(name){
    list.push({name, status:defaultTaskStatus, priority:defaultTaskPriority});
};

function delTask(name){
    const pos = list.findIndex(task => task.name === name);
    if (pos >= 0){
    list.splice(pos,1);
    } else console.log('No task to delete');
};

function changeTask(name, status, priority){
    let isStatusValid;
    let isPriorityValid;
    const pos = list.findIndex(task => task.name === name);
    if (pos < 0) return console.log('No task to edit');
    for(const name in STATUS){
        if (STATUS[name] === status) { 
            isStatusValid = true;
        };
    };
    if (!isStatusValid) return console.log('invalid status');
    for(const name in PRIORITY){
        if (PRIORITY[name] === priority) {
            isPriorityValid = true;
        };
    };
    if (!isPriorityValid) return console.log('invalid priority');
    if (pos >= 0){
        list[pos] = ({name, status, priority});
    };
};

function showTask(){
    let todoList='';
    let inProgressList='';
    let doneList='';
    for (const task of list){
        if (task.status === STATUS.TO_DO) todoList += (`\n${task.name}`);        
        if (task.status === STATUS.IN_PROGRESS) inProgressList += (`\n${task.name}`);
        if (task.status === STATUS.DONE) doneList += (`\n${task.name}`);
    };
    if (todoList === '') todoList = '\n-';
    if (inProgressList === '' ) inProgressList = '\n-';
    if (doneList === '') doneList = '\n-';
    console.log(`${STATUS.TO_DO}:${todoList}\n${STATUS.IN_PROGRESS}:${inProgressList}\n${STATUS.DONE}:${doneList}`);
};

addTask('test2');
addTask('to water flowers');
addTask('test5');
addTask('wash the car');
delTask('test5');
changeTask('create a post', 'In progress', 'high');
changeTask('create', 'In progress', 'high');
changeTask('test2', 'In progress', 'low');
changeTask('test5', 'In progress', 'high');
changeTask('test2', 'In progress5', 'low');
showTask();
