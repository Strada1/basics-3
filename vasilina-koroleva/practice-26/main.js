const Status = {
    To_Do: 'to do',
    In_Progress: 'in progress',
    Done: 'done',
};

const Priority = {
    Low: 'low',
    High: 'high'
};

const list = [
    { name: 'create a post', status: Status.In_Progress, priority: Priority.High },
    { name: 'test', status: Status.Done, priority: Priority.High },
    { name: 'learn english', status: Status.In_Progress, priority: Priority.High }
];


function addTask(name, status, priority) {
    list.push({ name, status, priority });
}

function deleteTask(deleteTask) {
    let findTask = list.findIndex(number => number.name === deleteTask);
    list.splice(findTask, 1);
}

function changeStatus(name, newStatus) {
    let findTaskName = list.findIndex(number => number.name === name);
    list[findTaskName].status = newStatus;
}

function changePriority(name, newPriority) {
    let findTaskName = list.findIndex(number => number.name === name);
    list[findTaskName].status = newPriority;
}

function showList() {
    for (key in Status) {
        console.log(Status[key] + ':');
        let taskStatus = list.filter((item) => item.status === Status[key]);
        taskStatus.forEach((item) => {
            console.log("\t" + item.name);
        });
        if (taskStatus.length === 0) {
            console.log("-");
        }
    }
}


addTask('go to bed', 'to do', 'low');
deleteTask('go to bed')
changeStatus('learn english', 'in progress')
changePriority('learn english', 'high')
showList()
