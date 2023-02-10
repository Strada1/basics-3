"use strict"

const STATUSES = {
    TODO:'To Do',
    INPROGRESS: 'In Progress',
    DONE: 'Done',
};
const PRIORITY = {
    LOW: 'low',
    HIGH: 'high',
}

const todoList = {
    list: [
        {name: "complete a new practice task", status: 'In Progress', priority: 'high'},
        {name: 'refactor the practice task', status: 'To Do', priority: 'high'},
        {name: 'create a pull request', status: 'To Do', priority: 'high'},
        {name: "make a bed", status: 'Done', priority: 'low'}
    ],
    changeStatusAndPriority(name, status, priority){
        name = name.toLowerCase();
        const necessaryTask = this.list.find(task => task.name === name)
        if(necessaryTask !== undefined){
            necessaryTask.status = status ? status : necessaryTask.status;
            necessaryTask.priority = priority ? priority : necessaryTask.priority;
            console.log("Task is changed!");
            return true;
        }
        console.log(`I don't have this task: ${name}`);
        return false;
    },
    addTask(name = "", status = STATUSES.TODO, priority = PRIORITY.LOW){
        name = name.toLowerCase();
        const necessaryTask = this.list.find(task => task.name === name)
        console.log(necessaryTask);
        if((necessaryTask === undefined) && (name !== "")){
            this.list.push({name, status, priority})
            console.log("Task is added!");
            return true;
        }
        console.log(`It's wrong the task: ${name}`);
        return false;
    },
    deleteTask(name = ""){
        name = name.toLowerCase();
        const necessaryTaskIndex = this.list.findIndex(task => task.name === name)
        if(~necessaryTaskIndex){
            this.list.splice(necessaryTaskIndex, 1);
            console.log("Task is deleted!");
            return true;
        }
        console.log(`I don't have this task: ${name}`);
        return false;
    },
    showTasks(){
        const todoTasks = this.list.filter(item => item.status === STATUSES.TODO);
        const progressTasks = this.list.filter(item => item.status === STATUSES.INPROGRESS);
        const doneTasks = this.list.filter(item => item.status === STATUSES.DONE);

        const showTasksByStatus = (statusTask, status) => {
            let isExist = true;
            console.log(` ${status}\n`);
            for(let task of statusTask){
                console.log(`\t[Task: ${task.name} --> Priority: ${task.priority}]`);
                console.log();
                isExist = false;
            }
            if(isExist){
                console.log("\t-");
            }
        };
        console.log("---------------");
        showTasksByStatus(todoTasks, STATUSES.TODO);
        showTasksByStatus(progressTasks,STATUSES.INPROGRESS);
        showTasksByStatus(doneTasks, STATUSES.DONE);
        console.log("---------------");
        return true;
    }
};
todoList.showTasks();
todoList.changeStatusAndPriority("complete a new practice task", STATUSES.DONE);
todoList.showTasks();
todoList.changeStatusAndPriority("Refactor the practice task", STATUSES.INPROGRESS);
todoList.showTasks();
todoList.changeStatusAndPriority("Refactor the practice task", STATUSES.DONE);
todoList.showTasks();
todoList.deleteTask("make a bed");
todoList.deleteTask("complete a new practice task");
todoList.deleteTask("Refactor the practice task");
todoList.showTasks();