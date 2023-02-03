"use strict"

const statusToDo = "To Do";
const statusProgress = "In Progress";
const statusDone = "Done";

const listToDo = {
    list : {
        "create a new practice task": "In Progress", 
        "make a bed": "Done", 
        "write a post": "To Do",
    },
    changeStatus(task, status) {
        task = task.toLowerCase();
        for(let key in this.list) {
            if(task === key) {
                if(status === statusDone || status === statusProgress || status === statusDone) {
                    this.list[task] = status;
                    console.log("The status is changed!");
                    return true;
                } else {
                    console.log("I don't know such status");
                    return false;
                }
            }
        }
        console.log("I don't know such task");
        console.log("Please add this task");
        return false;
    },
    addTask(task) {
        task = task.toLowerCase();
        for(let key in this.list) {
            if(task === key) {
                console.log("I already have such a task");
                console.log("Please change its status or delete it");
                return false;
            }
        }
        this.list[task] = statusToDo;
        console.log("The task is added!");
        return true;
    },
    deleteTask(task) {
        task = task.toLowerCase();
        for(let key in this.list) {
            if(task === key) {
                delete this.list[task];
                console.log("The task is deleted!");
                return true;
            }
        }
        console.log("I don't know such task");
        return false;
    },
    showList() {
        const showListToDo = (status) => {
            let isExisted = false;
            console.log(`${status}: `);
            for(let key in this.list){
                if(this.list[key] === status) {
                    console.log(`\t${key}`);
                    isExisted = true;
                }
            }
            if(!isExisted) {
                console.log("\t-");
            }
        }
        console.log("------------------------------------------");
        showListToDo(statusToDo);
        showListToDo(statusProgress);
        showListToDo(statusDone);
        console.log("------------------------------------------");
        return true;
    },
}
console.log(listToDo);
listToDo.showList();
listToDo.changeStatus("create a new practice task", statusDone);
listToDo.showList();
listToDo.addTask("Refactor the practice task");
listToDo.showList();
listToDo.changeStatus("Refactor the practice task", statusProgress);
listToDo.showList();
listToDo.changeStatus("Refactor the practice task", statusDone);
listToDo.showList();
listToDo.deleteTask("make a bed");
listToDo.deleteTask("create a new practice task");
listToDo.deleteTask("Refactor the practice task");
listToDo.showList();