const toDo = {
    list: {
    "приготовить завтрак": "Done",
    "приготовить обед": "Done",
    "приготовить ужин": "Done",
    "разобрать вещи": "In Progress",
    },
    addTask(task) {
        this.list[task] = "To Do";
    },
    deleteTask(task) {
        delete this.list[task];
    },
    changeStatus(task, status) {
        this.list[task] = status;
    },
    showList() {
        console.log(this.list)
    },
};
toDo.addTask("сделать домашнее задание");
toDo.addTask("прочесть 1 главу книги");
toDo.deleteTask("приготовить завтрак");
toDo.changeStatus("разобрать вещи", "Done");
toDo.changeStatus("сделать домашнее задание", "Done");
toDo.changeStatus("прочесть 1 главу книги", "Done");
toDo.showList();