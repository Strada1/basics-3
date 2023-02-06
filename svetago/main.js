const TODO = "To Do";
const INPROGRESS = "In Progress";
const DONE = "Done"
const toDo = {
    list: {},
    addTask(task) {
        this.list[task] = TODO;
    },
    deleteTask(task) {
        delete this.list[task];
    },
    changeStatus(task, status) {
        this.list[task] = status;
    },
    showList() {
        let i = 0;
        console.log(TODO);
        for (const task in this.list) {
            if (this.list[task] === TODO) {
                i++;
                console.log(task+":", this.list[task]);
            }
        }
        if (i === 0) {
            console.log("Nothing is To Do");
        } 

        i = 0;
        console.log(INPROGRESS);
        for (const task in this.list) {
            if (this.list[task] === INPROGRESS) {
                i++;
                console.log(task+":", this.list[task]);
            }
        }
        if (i === 0) {
            console.log("Nothing is In Progress");
        } 

        i = 0;
        console.log(DONE);
        for (const task in this.list) {
            if (this.list[task] === DONE) {
                i++;
                console.log(task+":", this.list[task]);
            }
        }
        if (i === 0) {
            console.log("Nothing is Done");
        } 
    }
}
toDo.addTask("сделать зарядку");
toDo.addTask("приготовить завтрак");
toDo.addTask("приготовить обед");
toDo.addTask("приготовить ужин");
toDo.addTask("сделать домашнее задание");
toDo.deleteTask("сделать зарядку");
toDo.changeStatus("приготовить завтрак", INPROGRESS);
toDo.showList();