const ToDo = {
    list: [
        { taskName: "create a new practice task", status: "In Progress" },
        { taskName: "make a bed", status: "Done" },
        { taskName: "write a post", status: "ToDo" }
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
    addTask(name, status = "ToDo") {
        for (const task of this.list) {
            if (name === task["taskName"]) {
                console.log("This name already exists. Write 'changeStatus' to change status of the task.");
                return;
            }
        }
        this.list.push({"taskName": name, "status": status});
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
    showList() {
        console.log("ToDo:");
        let flag = false;
        for (const task of this.list) {
            const x = task["status"];
            if (x.toLowerCase() === "todo" || x.toLowerCase() === "to do") {
                console.log('\t' + task.taskName);
                flag = true;
            }
        }
        if (!flag) { console.log('\t' + '-'); }
        flag = false;
        console.log("In Progress:");
        for (const task of this.list) {
            if (task["status"].toLowerCase() === "in progress") {
                console.log('\t' + task["taskName"]);
                flag = true;
            }
        }
        if (!flag) { console.log('\t' + '-'); }
        flag = false;
        console.log("Done:");
        for (const task of this.list) {
            if (task["status"].toLowerCase() === "done") {
                console.log('\t' + task["taskName"]);
                flag = true;
            }
        }
        if (!flag) { console.log('\t' + '-'); }
    }
};

ToDo.changeStatus("write a post", "Done");
ToDo.addTask('to wash dishes');
ToDo.deleteTask("create a new practice task");
ToDo.showList();