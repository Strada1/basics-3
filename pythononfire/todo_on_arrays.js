const todo = [
    {name:'Спатб',
     status:'done',
     priority:'medium'},

    {name:'Писац код',
    status:'in progress',
    priority:'high'},

    {name:'Тренираваца',
    status:'todo',
    priority:'high'},

    {name:'Убитб всх человеков',
     status:'todo',
     priority:'low'},
]

function findId(name) {
    return todo.findIndex(item => item.name === name);
}

function isCorrectStatus(status) {
    if (status === 'todo' || status === 'in progress' || status === 'done') {
        return true;
    } else {
        return false;
    }
}

function isCorrectPriority(priority) {
    if (priority === 'low' || priority === 'medium' || priority === 'high') {
        return true;
    } else {
        return false;
    }
}

function isInList(name) {
    if (findId(name) === -1) {
        return false;
    }  else {
        return true;
    }
}



function addTask(name, status, priority) {
    if (isCorrectStatus(status) === true && isCorrectPriority(priority) === true) {
    const newTask = {
        name,
        status,
        priority,
    }
    todo.push(newTask);
    } else {
        console.log('Ошибка ввода');
    }
}

function deleteTask(name) {
    if (isInList(name) === true) {
        todo.splice(findId(name), 1);
    } else {
        console.log('Такой задачи нет')
    }
}

function changeStatus(name, newStatus) {
    if (isInList(name) === true) {
        if (isCorrectStatus(newStatus) === true) {
            todo[findId(name)].status = newStatus;
        } else {
            console.log('Ошибка ввода статуса')
        }
    } else {
        console.log('Такой задачи нет')
    }
}

function changePriority(name, newPriority) {
    if (isInList(name) === true){
        if (isCorrectPriority(newPriority) === true) {
            todo[findId(name)].priority = newPriority;
        } else {
            console.log('Ошибка ввода приоритета')
        }
    } else {
        console.log('Такой задачи нет');
    }
}

function showList() {
    const arrTodo = [];
    const arrInProgress = [];
    const arrDone = [];

    for (let item of todo) {
        switch (item['status']) {
            case 'todo':
                arrTodo.push(item);
                break;
            case 'in progress':
                arrInProgress.push(item);
                break;
            case 'done':
                arrDone.push(item);
                break;
        }
    }

    if (arrTodo.length > 0) {
        console.log('Todo: ', arrTodo, '\n');
    } else {
        console.log('Todo: \n empty \n')
    }
    if (arrInProgress.length > 0) {
        console.log('In progress: ', arrInProgress, '\n');
    } else {
        console.log('In progress: \n empty \n')
    }
    if (arrDone.length > 0) {
        console.log('Done: ', arrDone, '\n');
    } else {
        console.log('Done: \n empty \n')
    }
}



addTask('Стац умным', 'in progress', 'high');
deleteTask('Убитб всх человеков')
changeStatus('Писац код', 'done');
changePriority('Спатб', 'high')

showList()
