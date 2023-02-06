const app = {
    status: {
       "To Do": "To Do",
        "In Progress": "In Progress",
        "Done": "Done"
    },
    list: {
        "make the to do list": "In Progress", 
        "make a dinner": "To Do",
        "buy a podorozhnik": "Done"
    },
    addTask(task, status) {
        this.list[task] = status;
        console.log("task " + task + " added")
    },
    removeTask(task) {
        delete this.list[task];
        console.log("task " + task + " deleted")
    },
    changeStatus(task, status) {
        if (task in this.list) {
            if (status in this.status) {
               this.list[task] = status;
               console.log("status " + task + " changed to " + this.list[task]);
            } else {
                console.log("wrong status");
            }
        } else {
            console.log("you dont have this task");
        }
    },
    showList() {
        console.log("This is your tasks:")
        for (const task in app.list) {
            console.log(task + ": " + app.list[task] );
        };
    }
};

app.showList();
app.addTask("buy vitamin", "Done");
app.changeStatus("switch coil", "To Do");
app.changeStatus("make a dinner", "In Progress");
app.changeStatus("buy a podorozhnik", "Canceled");
app.removeTask("buy a podorozhnik");
app.showList();