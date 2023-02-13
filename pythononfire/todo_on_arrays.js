const todo = [
    {
        name:'Спатб',
        status:'done',
        priority:'medium'
    },
    {
        name:'Писац код',
        status:'in progress',
        priority:'high'
    },
    {
        name:'Тренираваца',
        status:'todo',
        priority:'high'
    },
    {
        name:'Убитб всх человеков',
        status:'todo',
        priority:'low'
    },
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
    if (isCorrectStatus(status) && isCorrectPriority(priority)) {
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
    if (isInList(name)) {
        todo.splice(findId(name), 1);
    } else {
        console.log('Такой задачи нет')
    }
}

function changeStatus(name, newStatus) {
    if (!isInList(name)) {
        console.log('Такой задачи нет');
        return;
    }

    if (!isCorrectStatus(newStatus)) {
        console.log('Ошибка ввода статуса');
        return;
    }

    todo[findId(name)].status = newStatus;
}

function changePriority(name, newPriority) {
    if (!isInList(name)){
        console.log('Такой задачи нет');
        return;
    }

    if (!isCorrectPriority(newPriority)) {
        console.log('Ошибка ввода приоритета');
        return;
    }

    todo[findId(name)].priority = newPriority;
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



// addTask('Стац умным', 'in progress', 'high');
// changeStatus('Писац код', 'done');
// deleteTask('Убитб всх человеков')
// changePriority('Спатб', 'high')


// showList()