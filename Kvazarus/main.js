const ToDo = {
    list: {
        "create a new practice task": "In Progress",
        "make a bed":"Done",
        "write a post": "ToDo",
    },
    changeStatus(name, status) {
        if (name in this.list) {
            this.list[name] = status;
        } else {
            console.log("This name doesn't exist. Write 'addTask' to create new task.");
        };
    },
    addTask(name, status="ToDo") {
        if (!(name in this.list)) {
            this.list[name] = status;
        } else {
            console.log("This name already exists. Write 'changeStatus' to change status of the task.");
        };
    },
    deleteTask(name) {
        if (name in this.list) {
            delete this.list[name];
        } else {
            console.log("This name doesn't exist.");
        }
    },
    showList() {
        console.log("ToDo:");
        let flag = false;
        for (const name in this.list) {
            const x = this.list[name];
            if (x === "ToDo" || x === "Todo" || x === "To Do" || x === "To do"){
                console.log('\t' + name);
                flag = true;
            }
        }
        if (!flag) {console.log('\t' + '-');}
        flag = false;
        console.log("In Progress:");
        for (const name in this.list) {
            if (this.list[name] === "In Progress"){
                console.log('\t' + name);
                flag = true;
            }
        }
        if (!flag) {console.log('\t' + '-');}
        flag = false;
        console.log("Done:");
        for (const name in this.list) {
            if (this.list[name] === "Done"){
                console.log('\t' + name);
                flag = true;
            }
        }
        if (!flag) {console.log('\t' + '-');}
    }
};

ToDo.addTask('to wash dishes');
ToDo.changeStatus("write a post", "Done");

ToDo.showList();