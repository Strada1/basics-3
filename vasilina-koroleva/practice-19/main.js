
const taskList = {
    list: {
        "create a new practice task": "In Progress",
        "make a bed": "Done",
        "write a post": "To Do",
    },
    changeStatus(task, status) {
        this.list[task] = status;
    },
    addTask(task, status) {
        this.list[task] = status;
    },
    deleteTask(task, status) {
        delete this.list[task];
    },
    showList() {
        for (const task in taskList.list) {
            console.log((task) + ' : ' + (taskList.list[task]));
        }

    }
};


taskList.changeStatus("write a post", "Done");
taskList.addTask('have a walk', 'To Do');
taskList.deleteTask('have a walk');
taskList.showList();

