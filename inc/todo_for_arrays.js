const list = [
    { name: 'create a post', status: 'Todo', priority: 'low' },
    { name: 'test', status: 'Done', priority: 'high' },
    { name: 'write a post', status: 'Todo', priority: 'low' },
    { name: 'practice ToDo', status: 'In progress', priority: 'low' },
    { name: 'homework', status: 'Done', priority: 'low' },
];


function showList(array) {
    if (!array.length) {
        showWarning('Array is empty');
        return;
    }

    showStatus(array, 'Done');
    showStatus(array, 'In progress');
    showStatus(array, 'Todo');
}

function addTask(array, task, status = 'Todo', priority = 'low') {
    array.push({ name: task, status: status, priority: priority });
}

function deleteTask(array, task) {
    if (!checkValueInArray(array, task)) {
        showWarning();
        return;
    }

    array.forEach((obj, ind) => {
        // if (Object.values(obj).includes(task)) {
        //     array.splice(ind, 1);
        // }
        if (checkValueInArray(obj, task)) {
            array.splice(ind, 1);
        }
    });
}

function changeStatus(array, task, status = 'In Progress') {
    if (!checkValueInArray(array, task)) {
        showWarning();
        return;
    }

    deleteTask(array, task);
    addTask(array, task, status);
}

function checkValueInArray(array, value) {
    let existValue = false;
    if (Array.isArray(array)) {
        array.forEach(element => {
            if (Object.values(element).includes(value)) {
                existValue = true;
                return existValue;
            }
        });
    }
    else {
        if (Object.values(array).includes(value)) {
            existValue = true;
            return existValue;
        }
    }

    return existValue;
}

function showStatus(array, status) {
    let outString = '';
    if (checkValueInArray(array, status)) {
        outString += `${status}:\n`
        let doneArray = array.filter(el => Object.values(el).includes(status));
        doneArray.map(el => outString += `\t${el.name}\n`);
    }
    console.log(outString);
}

function showWarning(message = 'Task is not exist :(') {
    console.log(message);
}

addTask(list, 'check Exception');
changeStatus(list, 'check Exception', 'In progress');
deleteTask(list, 'write a post');
showList(list);

