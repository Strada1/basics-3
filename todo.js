const STATUS = {
    TO_DO: "To Do",
    DONE: "Done",
    IN_PROGRESS: "In Progress"
}

const DEFAULT_STATUS = STATUS.TO_DO;

const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

function changeStatus(task, status) {
    list[task] = status;
}

function addTask(task) {
    list[task] = DEFAULT_STATUS;
}

function deleteTask(task) {
    delete list[task];
}


function showList() {
    for (let nameStatus in STATUS) {
        console.log(`${STATUS[nameStatus]}:`)
        let count = 0;
        for (let name in list) {
            if (list[name] === STATUS[nameStatus]) {
                console.log(`   "${name}"`);
                count++;
            }
        }
        if (count === 0) {
            console.log("   -");
        }
    }
}

changeStatus("write a post", "Done") // меняет статус задачи
addTask('have a walk'); // добавляет новую задачу
deleteTask('have a walk'); // удаляет задачу
showList();