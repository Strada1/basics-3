const DONE = "Done";
const TODO = "To Do";
const INPROGRESS = "In Progress";


const list = {
    "create a new practice task": INPROGRESS,
    "create a new practice task2": INPROGRESS,
    "make a bed": DONE,
    "make a bed2": DONE,
    "write a post": TODO,
    "write a post2": TODO,
}

function changeStatus(taskName, newStatus) {
    if (newStatus !== TODO && newStatus !== INPROGRESS && newStatus !== DONE) {
        console.log("Введено некорректное значение нового статуса. Введите DONE, TODO или INPROGRESS!")
    } else {
        list[taskName] = newStatus;
    }
}

function addTask(taskName) {
    list[taskName] = TODO;
}

function deleteTask(taskName) {
    delete list[taskName];
}

function showList() {

    let result;

    let stringToDo = "";
    let stringProgress = "";
    let stringDone = "";

    for (let key in list) {
        if (list[key] === TODO) {
            stringToDo += key + " : " + TODO + "\n";
        } else if (list[key] === INPROGRESS) {
            stringProgress += key + " : " + INPROGRESS + "\n";
        } else {
            stringDone += key + " : " + DONE + "\n";
        }
    }

    if (stringToDo === "") {
        stringToDo = "Нет задач TODO \n";
    }

    if (stringProgress === "") {
        stringProgress = "Нет задач в процессе \n";
    }

    if (stringDone === "") {
        stringDone = "Нет выполненных задач \n";
    }

    result = stringToDo + "\n" + stringProgress + "\n" + stringDone;
    return result;
}

changeStatus("make a bed", TODO);
changeStatus("write a post", INPROGRESS);
addTask('have a walk');
console.log(list);
deleteTask('have a walk');
console.log(list);

changeStatus("make a bed", "LETS GO");

console.log(list);

deleteTask("make a bed2");
console.log(showList());