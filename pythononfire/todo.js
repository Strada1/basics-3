// ------------- IS IN -------------
function isIn(task) {
    if (task in list) {
        return true
    } else {
        return false
    }
}

// ------------- SHOW LIST -------------
function showList() {
    const arrTodo = [];
    const arrInProgress = [];
    const arrDone = [];

    for (key in list) {
        switch(list[key]) {
            case 'Todo':
                arrTodo.push(key);
                break;
            case 'In progress':
                arrInProgress.push(key);
                break;
            case 'Done':
                arrDone.push(key);
                break;
        }
    }

    console.log('Todo:');
    if (arrTodo.length > 0) {
        console.log(arrTodo);
    } else {
        console.log('Empty')
    }

    console.log('In progress:');
    if (arrInProgress.length > 0) {
        console.log(arrInProgress);
    } else {
        console.log('Empty')
    }

    console.log('Done:');
    if (arrDone.length > 0) {
        console.log(arrDone);
    } else {
        console.log('Empty')
    }
}

// ------------- ADD TASK -------------
function addTask(task) {
    if (isIn(task) === true) {
        console.log('Такая задача уже есть в списке')
    } else {
        list[task] = 'Todo';
    }
}

// ------------- DELETE TASK -------------
function deleteTask(task) {
    if (isIn(task) === true) {
        delete list[task];
    } else {
        console.log('Такой задачи нет в списке')
    }
}

// ------------- CHANGE STATUS -------------
function changeStatus(task, value) {
    if (isIn(task) === false) {
        console.log('Такой задачи нет в списке')
    } else {
    switch(value) {
        case 'Done':
            list[task] = value;
            break;
        case 'In progress':
            list[task] = value;
            break;
        case 'Todo':
            list[task] = value;
            break;
        default:
            console.log('Неверный статус задачи')
        }
    }
}

// ============================================
const list = {
    "Sleep": "Done",
    "Code": "In progress",
	"TRAIN HARD": "Todo",
	"Rest": "Todo",
};


addTask('One');
addTask('Two');
addTask('Three');
deleteTask('sleep');
changeStatus('Code', 'Done')
showList();