
const list = [
    {name: 'create a post', status: 'In Progress', priority: 'low'},
    {name: 'test', status: 'Done', priority: 'high'},
];

function addTask(name){
    const task = {name: name, status: 'To Do', priority: 'low'}
    list.splice(list.length-1, 0, task);
}

function deleteTask(task){
    const pos = list.findIndex(list => list.name === task);
    if (pos !== -1) {
        list.splice(pos,1);

    }
}

function changeStatus(task, status){
    const pos = list.findIndex(list => list.name === task);
    console.log(pos)

    const findTask = list.find(list => list.name === task);
    console.log(findTask)

    findTask.status = status;
    console.log(findTask)

    list[pos] = findTask;
}

function showList(){
    const ToDoObjects = list.filter(task => task.status === 'To Do');
    const ToDoList = ToDoObjects.map(task => task.name);
    const stringToDo = ToDoList.join('\n           ');



    const InProgress = list.filter(task => task.status === 'In Progress');
    const InProgressList = InProgress.map(task => task.name);
    const stringInProgress = InProgressList.join('\n            ');

    const DoneObject = list.filter(task => task.status === 'Done');
    const DoneList = DoneObject.map(task => task.name);
    const stringDone = DoneList.join('\n               ');

    console.log(
        `
        Todo:
            ${stringToDo}
        
        In Progress:
            ${stringInProgress}
        
        Done:
            ${stringDone}
        `
    )
};

addTask('learn English');
addTask('clean in home');



changeStatus('learn English', 'In Progress');

addTask('write a post');

changeStatus('learn English', 'Done')
changeStatus('clean in home', 'In Progress');

addTask('make a bad');

deleteTask('write a post');



showList();

