const statuses = {
    toDo: 'To Do',
    inProgress: 'In progress',
    done: 'Done'
};

const TODO = [
    {name: "create a new practice task", status: statuses.toDo},
    {name: "make a bed", status: statuses.done}, 
    {name: "write a post", status: statuses.toDo}, 
    {name: "do english exercises", status: statuses.done}, 
    {name: "read a book", status: statuses.inProgress},  
];

function isValidName(task) {
    return TODO.find(item => item.name === task)
};

const getIndexOfTask = (task) => {
    const taskName = isValidName(task);
    const indexOfTask = TODO.indexOf(taskName);
    return indexOfTask;
};

function addTask(task) {
    if (isValidName(task)) {
        console.log("I have it");
    } else {
        TODO.push({name: task, status: statuses.toDo});
    };
};


function changeStatus(task, status) {
    if (isValidName(task)) {
        const taskToChangeStatus = isValidName(task);
        taskToChangeStatus["status"] = status;
       }  else {
        console.log('Нет в списке, не могу изменить');
       };
};

function deleteTask(task) {
    if (isValidName(task)) {
        const indexOfTask = getIndexOfTask(task);
        TODO.splice(indexOfTask,1);
           }  else {
            console.log('Нет в списке, не могу удалить');
           };
};


function showList() {
    const inProgress = TODO.filter(task => task.status === "In progress");
    const newInProgress = inProgress.map(item => item.name);
    console.log("\n In progress: ");
    newInProgress.forEach (task => {
        console.log("\t" + task);
    });

    const toDo = TODO.filter(task => task.status === "To Do");
    const newToDo = toDo.map(item => item.name);
    console.log("\n To do: ");
    newToDo.forEach (task => {
        console.log("\t" + task);
    });


    const done = TODO.filter(task => task.status === "Done");
    const newDone = done.map(item => item.name);
    console.log("\n Done: ");
    newDone.forEach (task => {
        console.log("\t" + task);
    });


};



addTask('have a walk'); 
addTask("read a book"); 
changeStatus("create a new practice task", statuses.done);

console.log(isValidName('make a bed'));
console.log(getIndexOfTask('make a bed'));

deleteTask('make a bed');
showList();
