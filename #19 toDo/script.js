const VALUE = {
    Todo: 'Todo',
    InProgress: 'In Progress',
    Done: 'Done',
    Default: 'Incorrect value'
}

function addTask(key) {
    this.list[key] = VALUE.Todo
};

function changeStatus(key, value) {
    if (value in VALUE) {
        this.list[key] = value;
    }
};

function deleteTask(key) {
    if (key in this.list) {
        delete this.list[key];
    }
};

function showList() {
    for (let item in this.list) {
        switch (this.list[item]) {
            case VALUE.Todo:
                console.log(`"${item}" : ${VALUE.Todo}`);
                break;
            case VALUE.InProgress:
                console.log(`"${item}" : ${VALUE.InProgress}`);
                break;
            case VALUE.Done:
                console.log(`"${item}" : ${VALUE.Done}`);
                break;
            default:
                console.log(`"${item}" : ${VALUE.Default}`);
        }
    }
    if (!Object.values(this.list).includes(VALUE.Done)) {
        console.log('Nothing is done!');
    }
};

const toDo = {
    list: {
        "create a new practice task": "Todo",
        "make a bed": "In Progress",
        "write a post": "todo",
        "empty post": ""
    },
    deleteTask,
    changeStatus,
    addTask,
    showList
};

toDo.deleteTask('empty pos')
toDo.showList();
