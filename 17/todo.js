const list = {
    todo: {
        "create a new practice task": "In Progress",
        "make a bed": "Done",
        "write a post": "To Do",
    },
    deleteTask(task) {
        delete this.todo[task];
    },
    changeStatus(task, progress) {
        this.todo[task] = progress;
    },
    addTask(name) {
        this.todo[name] = "To Do";
    },
    showList() {
        let conunterDone = 0;
        for (let key in this.todo) {
            if (this.todo[key] === "To Do") {
                console.log(`\t${key} : ${this.todo[key]}`);
            }
        }
        console.log();
        for (let key in this.todo) {
            if (this.todo[key] === "In Progress") {
                console.log(`\t${key} : ${this.todo[key]}`);
            }
        }
        console.log();
        for (let key in this.todo) {
            if (this.todo[key] === "Done") {
                console.log("\t" + key + " : " + this.todo[key]);

                conunterDone++;
            }
        }
        if (conunterDone === 0) {
            console.log("\tNothing is Done");
        }

    }
}
list.deleteTask("write a post");
list.addTask("do morning exercises");
list.changeStatus("make a bed", "In Progress");
list.changeStatus("create a new practice task", "To Do")
list.showList();