// const TODO = "To Do";

const toDo = {
    taskStatus: {
        toDo: "To Do",
        inProgress: "In Progress",
        done: "Done"
    },
    taskList: {
        // "write a post": "To Do"
    },
    changeStatus(taskName, taskStatus) {    // меняет статус задачи
        if (taskName in this.taskList) {
            this.taskList[taskName] = taskStatus;
            console.log("Task", taskName, "status is changed");
        } else 
            console.log("Task", taskName, "isn't found");
        // console.log(this.taskList);         // * для отладки *
    },
    addTask(taskName) {     // добавляет новую задачу
        if (taskName in this.taskList) {
            console.log("Task", taskName, "is also present");
            // console.log(this.taskList);     // * для отладки *
            return;
        }
        this.taskList[taskName] = this.taskStatus.toDo;
        if (taskName in this.taskList)
            console.log("Task", taskName, "is added");
        else
            console.log("ERROR: Task", taskName, "isn't added");
        // console.log(this.taskList);         // * для отладки *
    },
    deleteTask(taskName) {      // удаляет задачу
        if (taskName in this.taskList) {
            delete this.taskList[taskName];
            if (taskName in this.taskList)
                console.log("ERROR: Task", taskName, "isn't deleted");
            else
                console.log("Task", taskName, "is deleted");
        }
        // console.log(this.taskList);         // * для отладки *
    },
    showList() {            // показывает список всех задач
        for (const status in this.taskStatus) {
            let is_task = false;
            console.log(this.taskStatus[status]);
            for (const task in this.taskList) {
                if (this.taskList[task] === this.taskStatus[status]) {
                    console.log("  ", "\"" + task + "\"");
                    is_task = true;
                }
            }
            if (!is_task) 
                console.log("   -");
        }
        // console.log(this.taskList);         // * для отладки *
    }
}

toDo.addTask("create a new practice task");
toDo.addTask("make a bed");
toDo.addTask("make a bed");
toDo.addTask("write a post");
toDo.addTask("write a post 2");
toDo.deleteTask("write a post 2");
toDo.changeStatus("write a post", toDo.taskStatus.inProgress);
toDo.showList();


