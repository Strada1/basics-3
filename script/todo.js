
const todo = {
    list : {
        'Wush up' : 'Done',
        'eat' : 'Done',
        'Work out' : 'performed'
    }
}

const done = 'Done';
const inProgress = 'In progress';
const toDo = 'To Do';

function addTask(task, status) {
    list[task] = status; {
        if(status === inProgress ||
            status === done ||
            status === toDo &&
            task !== list[task]) {
                console.log(task + ' : ' + list[task])
            }
    }
}

function changeStatus(task, status) {
    list[task] = status; {
        if(status === done ||
            status === inProgress||
            status === toDo) {
                console.log('Статус изменен')
            }else {
                console.log('Такой задачи нету')
            }
    }
}

function deleteTask(task){
    delete list[task]; {
        console.log('Задача удалена')
    }
}

function showList() {
    console.log(todo.list)
}

addTask('Приступить к следующей задаче', 'In progress');
deleteTask('Work out');
changeStatus('eat','In progree')
showList()