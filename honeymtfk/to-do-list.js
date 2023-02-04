const stat = {
    "TO_DO": "to do",
    "IN_PROGRESS": "in progress",
    "DONE": "done"
};
const list = {
    tasks: {
        "Make some HTML": stat.DONE,
        "Make some CSS": stat.IN_PROGRESS,
        "Make some JavaScript": stat.TO_DO
    },
    showList () {
        console.log(this.tasks)
        let number = 0;
        for (const key in list.tasks) {
            if (this.tasks[key] === stat.DONE) {
                number++
            }
        }
        if (number === 0) {
            console.log ("Nothing is done");
        }
    },
    addTask (taskName) {
       this.tasks[taskName] = stat.TO_DO;
    },
    deleteTask (taskName) {
        if (taskName in this.tasks) {
            delete this.tasks[taskName];
        } else {
            return (this.tasks);
        }
    },
    changeStatus (taskName, statusName) {
        if (statusName == stat.TO_DO || statusName == stat.IN_PROGRESS ||
            statusName == stat.DONE) {
                return (this.tasks[taskName] = statusName);
        } else {
            return (this.tasks[taskName]);
        }
    }
};
list.addTask("Relax");
list.deleteTask ("Make some HTML");
list.changeStatus("Make some JavaScript", "in progress");
list.showList();