const toDoList = {
    list: {
        "create a new practice task": "In Progress",
        "make a bed": "Done",
        "write a post": "To Do",
    },

    showList() {
        console.table(this.list);

    },

    addTask(task, status = 'To Do') {
        this.list[String(task)] = status;
    },

    changeStatus(task, status = 'In Progress') {
        if (typeof task === 'undefined') {
            console.log("task is not defined");
            return 0;
        }
        if (String(task) in this.list) {
            this.list[task] = status;
        }
    },

    deleteTask(task) {
        if (String(task) in this.list) {
            delete this.list[task];
        }
        else {
            console.log("Task is not exist");
            return 0;
        }
    }
}


toDoList.addTask('make todo');
toDoList.addTask(3456);
toDoList.showList();
toDoList.changeStatus("write a post", "Done");
toDoList.showList();
toDoList.changeStatus();
toDoList.deleteTask('make todo');
toDoList.showList();