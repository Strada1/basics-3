// ToDo на массивах 

const taskStatus = { TODO: 'To Do', IN_PROGRESS: 'In progress', DONE: 'Done' };

const list = [
    { name: 'clean my house', status: taskStatus.TODO, priority: 'low' },
    { name: 'make a work', status: taskStatus.IN_PROGRESS, priority: 'high' },
    { name: 'go to the shop', status: taskStatus.TODO, priority: 'high' },
    { name: 'play basket', status: taskStatus.DONE, priority: 'low' },
    { name: 'play videogames', status: taskStatus.IN_PROGRESS, priority: 'high' }
];

function addToList(name, status = taskStatus.TODO, priority = 'low') {
    list.push({ name, status, priority });
};

function delTask(name) {
    const FindIndexToDelete = list.findIndex(list => list.name === name);
    list.splice(FindIndexToDelete, 1);
}

function changeTaskStatus(name, status) {
    const FindIndexToChange = list.findIndex(list => list.name === name);
    list[FindIndexToChange].status = status
}

function showTask() {
    const TASKINPROGRESS = list.filter((name) => name.status === "In progress");
    console.log(TASKINPROGRESS);
    const TASKTODO = list.filter((name) => name.status === "To Do");
    console.log(TASKTODO);
    const TASKDONE = list.filter((name) => name.status === "Done")
    console.log(TASKDONE);
}

showTask();