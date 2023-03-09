const toDoArrayList = [
    {name: 'go to the shop', status: 'Done', priority: 'low'},
    {name: 'cook dinner', status: 'In progress', priority: 'high'},
    {name: 'call Mom', status: 'To do', priority: 'low'}
]

function addTask () {
    let name = prompt('Enter the name of task', '');
    if (toDoArrayList.find(nameOfTask => nameOfTask.name === name)) {
        console.log('This task already exist');
        return;
    }
    let status = prompt('Enter status of task. Choose 1 (done), 2 (in progress) or 3 (to do)', '');
    switch (status) {
        case "1":
            statusOfTask = 'Done';
            break;
        case "2":
            statusOfTask = 'In progress';
            break;
        case "3":
            statusOfTask = 'To do';
            break;
        default:
            console.log('You entered the task status incorrectly');
            return;
    }
    let priority = prompt('Enter priority of task. Choose 1 (low) or 2 (high)', '');
    switch (priority) {
        case "1":
            priorityOfTask = 'low';
            break;
        case "2":
            priorityOfTask = 'high';
            break;
        default:
            console.log('You entered the task priority incorrectly');
            return;
    }
    toDoArrayList.push({name: `${name}`, status: `${statusOfTask}`, priority: `${priorityOfTask}`});
    console.log('New task has been successfully created')
}

function changeTask () {
    let name = prompt('Enter the name of task', '');
    if (toDoArrayList.find(nameOfTask => nameOfTask.name === name)) {
        let status = prompt('Enter status of task. Choose 1 (done), 2 (in progress) or 3 (to do)', '');
        switch (status) {
            case "1":
                statusOfTask = 'Done';
                break;
            case "2":
                statusOfTask = 'In progress';
                break;
            case "3":
                statusOfTask = 'To do';
                break;
            default:
                console.log('You entered the task status incorrectly');
                return;
        }
        let priority = prompt('Enter priority of task. Choose 1 (low) or 2 (high)', '');
        switch (priority) {
            case "1":
                priorityOfTask = 'low';
                break;
            case "2":
                priorityOfTask = 'high';
                break;
            default:
                console.log('You entered the task priority incorrectly');
                return;
        }
    } else {
        console.log('This task does not exist');
        return;
    }
    const indexChangedTask = toDoArrayList.findIndex(nameToChange => nameToChange.name === name);
    toDoArrayList[indexChangedTask] = {name: `${name}`, status: `${statusOfTask}`, priority: `${priorityOfTask}`}
    console.log('Task status was successfully changed');
}

function showTaskList () {
    console.log(toDoArrayList);
}

function deletedTask () {
    let name = prompt('Enter the name of task', '');
    if (toDoArrayList.find(nameOfTask => nameOfTask.name === name)) {
        const deletedTask = toDoArrayList.findIndex(taskToDeleted => taskToDeleted.name === name);
        delete toDoArrayList[deletedTask];
        console.log('This task was deleted');
    } else {
        console.log('This task does not exist');
    }
}

function chooseAction () {
    let action = prompt('Please choose what to do. Enter 1 to add a task, enter 2 to remove a task, enter 3 to change task, or enter 4 to show list the tasks', '');
    switch (action) {
        case "1":
            addTask();
            break;
        case "2":
            deletedTask();
            break;
        case "3":
            changeTask();
            break;
        case "4":
            showTaskList();
            break;
        default:
            console.log('You entered the wrong action. Try again');
            break;
    }
}

chooseAction();