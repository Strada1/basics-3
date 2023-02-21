const arrayToDo = []; // {task: '', status: '', priority: ''}

const STATUSES = {
    toDo: 'To Do',
    inProgress: 'In Progress',
    done: 'Done'
}

const LOW = 'low';
const HIGH = 'high';


function isTask(name) {
    const index = arrayToDo.findIndex(item => item.task === name);
    if (index < 0)
        return {ok: false, index: index};
    else 
        return {ok: true, index: index};
}


function addTask(name, priority) {
    const priority_str = (priority === HIGH) ? HIGH : LOW;
    if (isTask(name).ok) {
        console.log(`задача "${name}" уже есть в массиве`);
    } else {
        arrayToDo.push({task: name, status: STATUSES.toDo, priority: priority_str});
        console.log(`задача "${name}" добавлена в массив`);
    }
}

function deleteTask(name) {
    const isTaskResult = isTask(name);
    if (isTaskResult.ok) {
        const item = arrayToDo.splice(isTaskResult.index, 1);
        console.log(`задача "${name}" удалена из массива`);
    } else {
        console.log(`задача "${name}" не найдена в массиве`);
    }
}

function changeTaskStatus(name, status) {
    const isTaskResult = isTask(name);
    if (isTaskResult.ok) {
        const obj = arrayToDo[isTaskResult.index];
        let is_status = false;
        for (const key in STATUSES) {
            if (STATUSES[key] === status) {
                is_status = true;
                break;
            }
        }
        if (is_status) {
            obj.status = status;
            console.log(`статус задачи "${name}" изменён на "${status}"`);
        } else {
            console.log(`недопустимый статус "${status}"`);
        }
    } else {
        console.log(`задача "${name}" не найдена в массиве`);
    }
}

function showTasks() {
    console.log("Задачи:");
    /*
    const arr_todo = arrayToDo.filter(item => item.status === STATUSES.toDo);
    if (arr_todo.length < 1) {
        arr_todo = ['-'];
    }
    console.log(STATUSES.toDo + ':');
    arr_todo.forEach(item => console.log(item));

    const arr_inpro = arrayToDo.filter(item => item.status === STATUSES.inProgress);
    if (arr_inpro.length < 1) {
        arr_inpro = ['-'];
    }
    console.log(STATUSES.inProgress + ':');
    arr_inpro.forEach(item => console.log(item));

    const arr_done = arrayToDo.filter(item => item.status === STATUSES.done);
    if (arr_done.length < 1) {
        arr_done = ['-'];
    }
    console.log(STATUSES.done + ':');
    arr_done.forEach(item => console.log(item));
    */
    for (const status in STATUSES) {
        showTasksByStatus(STATUSES[status]);
    }
}

function showTasksByStatus(status) {
    let arr_status = arrayToDo.filter(item => item.status === status);
    if (arr_status.length < 1) {
        arr_status = ['-'];
    }
    console.log(status + ':');
    arr_status.forEach(item => console.log(`  * ${item.task}: ${item.status} (${item.priority})`));
}

addTask('встать');
addTask('сделать зарядку', HIGH);
addTask('принять душ', HIGH);
deleteTask('встать');
deleteTask('почистить зубы');
addTask('проснуться');
addTask('поработать', HIGH);
addTask('пообедать');
addTask('проснуться');
deleteTask('пообедать');
addTask('позавтракать');
changeTaskStatus('проснуться', STATUSES.done);
changeTaskStatus('сделать зарядку', STATUSES.done);
changeTaskStatus('принять душ', STATUSES.inProgress);
changeTaskStatus('позавтракать', 'Skip');
showTasks();