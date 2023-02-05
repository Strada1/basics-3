const STATUS = {
    TO_DO: "To Do",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
}

const scheduler = {
    fullList: {
        "drink water": "Done",
        "create a new practice task": "In Progress",
        "drink coffee": "In Progress",
        //"have breakfast": "To Do",
        //"work": "To Do",
        "sleep": "To Do",
    },


    checkStatus(status) {
        for (const value in STATUS) {
            if (status === STATUS[value]) {
                return true;
            }
        }

        return console.log("Такого статуса нет!");
    },

    changeStatus(task, status) {
        if (!this.checkStatus(status)) {
            return;
        }

        this.fullList[task] = status;
    },

    addTask(task, status = STATUS.TO_DO) {
        if (!this.checkStatus(status)) {
            return;
        }

        this.fullList[task] = status;
    },

    deleteTask(task) {
        delete this.fullList[task];
    },

    // Отображение без сортировки
    showListWithoutSorting() {
        console.log(this.fullList);
    },

    // Отображение с сортировкой
    showList() {
        for (const value in STATUS) {

            let flagEmpty = true;

            console.log(STATUS[value] + ":")

            for (const task in this.fullList) {
                if (this.fullList[task] === STATUS[value]) {
                    console.log("   " + task);
                    flagEmpty = false;
                }
            };

            if (flagEmpty === true) {
                console.log("   -")
            };

            console.log("");
        }
    },

};

scheduler.changeStatus("drink coffee", "Done");
scheduler.addTask("drink second cup of coffee", "In Progress");
scheduler.addTask("drink second cup of coffee", "oh no"); // Такого статуса нет!
scheduler.deleteTask("sleep");

scheduler.showList();