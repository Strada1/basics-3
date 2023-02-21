const arrayToDo = [];

function addTask(name) {
    const index = arrayToDo.indexOf(name);
    if (index < 0) {
        arrayToDo.push(name);
        console.log(`задача "${name}" добавлена в массив`);
    } else {
        console.log(`задача "${name}" уже есть в массиве`);
    }
}

function deleteTask(name) {
    const index = arrayToDo.indexOf(name);
    if (index < 0) {
        console.log(`задача "${name}" не найдена в массиве`);
    } else {
        arrayToDo.splice(index, 1);
        console.log(`задача "${name}" удалена из массива`);
    }
}

function showTasks() {
    console.log(`массив arrayToDo: ${arrayToDo}`);
    console.log("Задачи:");
    for (const item of arrayToDo) {
        console.log(item);
    }
}

addTask('встать');
addTask('сделать зарядку');
addTask('принять душ');
deleteTask('встать');
deleteTask('почистить зубы');
addTask('проснуться');
addTask('поработать');
addTask('пообедать');
addTask('проснуться');
deleteTask('пообедать');
addTask('позавтракать');
showTasks();
