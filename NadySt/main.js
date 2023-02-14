let list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'},
{name: 'stat', status: 'In progress', priority: 'low'},
{name: 'oogjjk', status: 'In progress', priority: 'low'},
{name: 'yfy', status: 'To Do', priority: 'high'},
];

function addTask(task) {
    list.push({name: task, status: 'In progress', priority: 'low'});
    console.log(list); 
};

function deleteTask(task) {
    list = list.filter(item => item.name !== task);
    console.log(list);
};

function chancheStatus(task, status) {
    const currentTask = list.find(item => item.name === task);
    if (currentTask.status !== status) {
        currentTask.status = status
    };
};

function showList() {
    const doneList = list.filter(item => item.status === 'Done')
    console.log(doneList);
    const InProgressList = list.filter(item => item.status === 'In progress')
    console.log(InProgressList);
    const toDoList = list.filter(item => item.status === 'To Do')
    console.log(toDoList);
    };

function addTask(task) {
    if (!task) {
        return console.log("Entry your task")
    } else {
        console.log(list.push({name: task, status: 'In progress', priority: 'low'}))
    };
};

function deleteTask(task) {
    if (!task) {
        return console.log("Entry your task") 
    } else {
        console.log(list = list.filter(item => item.name !== task));
    }
};

function chancheStatus(task, status) {
    if (!task) {
        return console.log("Entry your task") 
    } else { const currentTask = list.find(item => item.name === task);
        if (currentTask.status !== status) {
            currentTask.status = status
        };
    }
};

function showList() {
    const taskWithDone = list.filter(item => item.status === "Done") 
        if (taskWithDone.length === 0) {
            console.log("No task with this status")
        } else {
            console.log(taskWithDone)
        };
    const taskWithtoDo = list.filter(item => item.status === "To Do")
        if (taskWithtoDo.length === 0) {
            console.log("No task with this status");
        } else {
            console.log(taskWithtoDo)
        };
    const taskWithInProgress = list.filter(item => item.status === "In progress");
        if (taskWithInProgress.length === 0) {
            console.log("No task with this status");
        } else {
            console.log(taskWithInProgress)
        };
    };

