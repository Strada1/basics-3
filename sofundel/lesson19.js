const toDoList = {};
const inProgressList = {};
const doneList = {};

const scheduler = {
    fullList: {
        "drink water": "Done",
        "create a new practice task": "In Progress",
        "drink coffee": "In Progress",
        "have breakfast": "To Do",
        "work": "To Do",
        "sleep": "To Do",
    },


    checkStatus(status) {
        if (status === "To Do" || status === "In Progress" || status === "Done") {
            return true;
        }
        else {
            return console.log("Такого статуса нет!");
        }
    },

    changeStatus(task, status) {
        if (!this.checkStatus(status)) {
            return;
        }

        this.fullList[task] = status;
    },

    addTask(task, status = "To Do") {
        if (!this.checkStatus(status)) {
            return;
        }

        this.fullList[task] = status;
    },

    deleteTask(task) {
        delete this.fullList[task];
    },

    showListWithoutSorting() {
        console.log(this.fullList);
    },

    // Первый способ отображения с сортировкой
    showList() {
        let i = 0;

        console.log("To Do:")
        for (const task in this.fullList) {
            if (this.fullList[task] === "To Do") {
                console.log("   " + task);
                i++;
            }
        };

        if (i === 0) {
            console.log("   -")
        };

        console.log("");

        i = 0;
        console.log("In Progress:")
        for (const task in this.fullList) {
            if (this.fullList[task] === "In Progress") {
                console.log("   " + task);
                i++;
            }
        };

        if (i === 0) {
            console.log("   -")
        };

        console.log("");

        i = 0;
        console.log("Done:")
        for (const task in this.fullList) {
            if (this.fullList[task] === "Done") {
                console.log("   " + task);
                i++
            }
        };

        if (i === 0) {
            console.log("   -")
        };
    },

    // Второй способ отображения с сортировкой - через "подобъекты"
    createSubLists() {
        for (const task in this.fullList) {
            if (this.fullList[task] === "To Do") {
                toDoList[task] = this.fullList[task];
            }
        };

        for (const task in this.fullList) {
            if (this.fullList[task] === "In Progress") {
                inProgressList[task] = this.fullList[task];
            }
        };

        for (const task in this.fullList) {
            if (this.fullList[task] === "Done") {
                doneList[task] = this.fullList[task];
            }
        };
    },

    checkListIsEmpty(list) {
        for (const key in list) {
            return false;
        }
        return true;
    },

    showListAlternative() {
        this.createSubLists();

        console.log("To Do:");

        if (this.checkListIsEmpty(toDoList)) {
            console.log("   -")
        } else {
            for (const task in toDoList) {
                console.log("   " + task);
            }
        };

        console.log("");
        console.log("In Progress:");

        if (this.checkListIsEmpty(inProgressList)) {
            console.log("   -")
        } else {
            for (const task in inProgressList) {
                console.log("   " + task);
            }
        };

        console.log("");
        console.log("Done:");

        if (this.checkListIsEmpty(doneList)) {
            console.log("   -")
        } else {
            for (const task in doneList) {
                console.log("   " + task);
            }
        };

    },

};

scheduler.changeStatus("drink coffee", "Done");
scheduler.addTask("drink second cup of coffee", "In Progress");
scheduler.addTask("drink second cup of coffee", "oh no"); // Такого статуса нет!
scheduler.deleteTask("sleep");

//scheduler.showList();

scheduler.showListAlternative();