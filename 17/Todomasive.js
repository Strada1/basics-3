const STATUSES = {
    TODO: "To Do",
    IN_PROGRESS: "In progress",
    DONE: "Done",
};
const PRIORITIES = {
    HIGH: "High",
    LOW: "Low",
};

const list = [
    { name: 'write a post', status: 'In progress', priority: 'low' },
    { name: 'create a new practice task', status: 'To Do', priority: 'high' },
    { name: 'make a bed', status: 'To Do', priority: 'low' },
];

function changeStatus(task, progress) {
    list.forEach((item) => {
        if (item.name === task) {
            item.status = progress;
        }
    });
}
function addTask(task, progress, priority = 'low') {
    list.push({ name: task, status: progress, priority: priority })


}
function deleteTask(task) {
    let deleteIndex = list.findIndex((item) => (item.name === task))
    list.splice(deleteIndex, 1)


}
function showList() {
    const todoArr = [];
    const progArr = [];
    const doneArr = [];
    const counterDone = 0;

    for (let item of list) {
        if (item.status === "To Do") {
            todoArr.push(item);
        } else if (item.status === "In Progress") {
            progArr.push(item)
        } else if (item.status === "Done") {
            doneArr.push(item);
            counterDone++;
        }

    }
    for (let item of todoArr) {
        console.log(item["status"] + ' : ' + item["name"]);
    }
    for (let item of progArr) {
        console.log(item["status"] + ' : ' + item["name"]);
    }
    for (let item of doneArr) {
        console.log(item["status"] + ' : ' + item["name"]);
    }
    switch (counterDone) {
        case 0:
            console.log("Nothing is done");
    }
}

18
showList();

addTask("write a book", "To Do")
//deleteTask("")
changeStatus("write a post", "To Do");
//console.log(list); 
showList();
