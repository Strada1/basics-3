// Моя ошибка, или скорее недочёт, состоит в том, что я не использовал методы массива,такие как findIndex или includes
const ToDo = {
    list: [
        { taskName: "create a new practice task", status: "In Progress", priority:"high" },
        { taskName: "make a bed", status: "Done", priority:"low" },
        { taskName: "write a post", status: "ToDo", priority:"low" }
    ],
    changeStatus(name, status) {
        for (const task of this.list) {
            if (name === task.taskName) {
                task.taskName = name;
                task["status"] = status;
                return;
            }
        }
        console.log("This name doesn't exist. Write 'addTask' to create new task.");
    },
    changePriority(name, priority) {
        for (const task of this.list) {
            if (name === task.taskName) {
                task.taskName = name;
                task["status"] = priority;
                return;
            }
        }
        console.log("This name doesn't exist. Write 'addTask' to create new task.");
    },
    addTask(name, status = "ToDo", priority = "low") {
        for (const task of this.list) {
            if (name === task["taskName"]) {
                console.log("This name already exists. Write 'changeStatus' to change status of the task.");
                return;
            }
        }
        this.list.push({ "taskName": name, "status": status, "priority": priority });
    },
    deleteTask(name) {
        for (let i = 0; i < this.list.length; i++) {
            if (name === this.list[i]["taskName"]) {
                this.list.splice(i, 1);
                return;
            }
        }
        console.log("This name doesn't exist.");
    },
    statusOrPriorityOut(statusOrPriority, isStatus = 0) {
        console.log(`${statusOrPriority}:`);
        let flag = false;
        this.list.forEach (task => {
            let x;
            if (isStatus) {
                x = task["status"];
            } else {
                x = task["priority"];
            }
            if (x.toLowerCase() === statusOrPriority.toLowerCase() || (x.slice(0, 2)+' '+x.slice(2)).toLowerCase() === statusOrPriority.toLowerCase) {
                console.log('\t' + task.taskName);
                flag = true;
            }
        })
        if (!flag) { console.log('\t' + '-'); }
    },
    showList() {
        this.statusOrPriorityOut("ToDo", true);
        this.statusOrPriorityOut("In Progress", true);
        this.statusOrPriorityOut("Done", true);
        this.statusOrPriorityOut("high", false);
        this.statusOrPriorityOut("low", false);
    }
};

ToDo.showList();
ToDo.changeStatus("write a post", "Done");
ToDo.addTask('to wash dishes');
ToDo.deleteTask("create a new practice task");
ToDo.showList();