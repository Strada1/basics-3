const STATUSES = {
    TODO: 'ToDo',
    IN_PROGRESS: 'In progress',
    DONE: 'Done',
};

const PRIORITY = {
    LOW: 'low',
    MEDIUM:'medium',
    HIGH: 'high',
};


const toDoList = [
    {name: 'wake up', status: STATUSES.IN_PROGRESS, priority: PRIORITY.HIGH},
    {name: 'make a bed', status: 321, priority: PRIORITY.LOW},
    {name: 'have a dinner', status: STATUSES.TODO, priority: PRIORITY.HIGH},
    {name: 'learn js', status: STATUSES.IN_PROGRESS, priority: PRIORITY.HIGH},
    {name: 'feed a cat', status: 321, priority: PRIORITY.MEDIUM},
    {name: 'make chores', status: STATUSES.TODO, priority: PRIORITY.MEDIUM},
    {name: 'go to work', status: 321, priority: PRIORITY.HIGH},
] 


function showTasksList() {
    for (let key in STATUSES) {
            switch(STATUSES[key]) {
                case 'ToDo':
                    const taskByToDo = toDoList.filter(item => item.status === STATUSES[key]); 
                    console.log(`ToDo:`)
                    if (taskByToDo.length == 0) {
                        console.log('    -');
                    } else {
                    taskByToDo.forEach(task => {
                        console.log(`\t${task.name} - ` + `${task.priority}`)
                        });
                    };
                        break;                    
                    
                case 'In progress':
                    const taskByInProgress = toDoList.filter(item => item.status === STATUSES[key]); 
                    console.log('In progress:')
                    if (taskByInProgress.length == 0) {
                        console.log('    -');
                    } else {
                    taskByInProgress.forEach(task => {
                        console.log(`\t${task.name} - ` + `${task.priority}`)
                        });
                    };
                        break;

                case 'Done':
                    const taskByDone = toDoList.filter(item => item.status === STATUSES[key]); 
                    console.log('Done:')
                    if (taskByDone.length == 0) {
                        console.log('    -');
                    } else {
                    taskByDone.forEach(task => {
                        console.log(`\t${task.name} - ` + `${task.priority}`)
                        });
                    };
                        break;                     
            };
    };
};


function isValidName(task) {
    return toDoList.find(item => item.name === task)
};

function isValidStatus(status) {
    return status === STATUSES.TODO || status === STATUSES.IN_PROGRESS || status === STATUSES.DONE
};

function addTask(name, status = STATUSES.TODO, priority = PRIORITY.LOW) {
    if (isValidName(name)) {
        console.log('This task is alreay in your list')
    } else {
        toDoList.push({
            name, 
            status, 
            priority
        });
    };
};

function changeStatus(task, status) {
    if (isValidName(task) && isValidStatus(status)) {
    const indexToChange = toDoList.findIndex(number => number.name === task);
    toDoList[indexToChange].status = status;
    } else {
        console.log('Invalid task or status');
    };
};

function deleteTask(task) {
    if (!(isValidName(task))) {
        console.log('This task doesn\'t exist');
    } else {
        const indexToDelete = toDoList.findIndex(number => number.name === task)
        const taskToDelete = toDoList.splice(indexToDelete, 1);
            return taskToDelete;
    };
};


addTask('go for a walk');
changeStatus('wake up', 'ToDo');
deleteTask('make chores');
showTasksList();
