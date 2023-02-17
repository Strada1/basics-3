const task = {
    listToDo:{},
    listInProgress:{},
    listDone:{},
    list : {
    "create a new practice task": "InProgress",
    "write a post": "ToDo",
    },
    changeStatus(name, status) {
        this.list[name] = status; 
    },
    addTask(name) {
        this.list[name] = "ToDo";
    },
    deleteTask(name) {
        delete this.list[name];
    },
    showList() {
        flagToDo = false;
        flagInProgress = false;
        flagDone = false;
        for (const x in this.list) {
            if (this.list[x] == "ToDo"){
                this.listToDo[x] = "ToDo"
                flagToDo = true; 
            } else if (this.list[x] == "Done"){
                this.listDone[x] = "Done"
                flagDone = true; 
            } else if (this.list[x] == "InProgress"){
                this.listInProgress[x] = "InProgress"
                flagInProgress = true; 
            }
        }
        if (flagToDo == true){
            for (const x in this.listToDo) {
                console.log('"'+ x + '"' + ": " + this.listToDo[x])
            }
        }
        else {
            console.log("Nothing is ToDo")
        }
        console.log()

        if (flagInProgress == true){
            for (const x in this.listInProgress) {
                console.log('"'+ x + '"' + ": " + this.listInProgress[x])
            }
        }
        else {
            console.log("Nothing is InProgress")
        }
        console.log()

        if (flagDone == true){
            for (const x in this.listDone) {
                console.log('"'+ x + '"' + ": " + this.listDone[x])
            }
        }
        else {
            console.log("Nothing is Done")
        }
        console.log()

    }
}

task.changeStatus("write a post","Done");
task.addTask("Read book");
task.deleteTask("create a new practice task");
console.log(task);
task.showList();
