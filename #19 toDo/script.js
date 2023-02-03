const toDo = {
    list: {
        "first": "In Progress",
        "second": "Done", 
        "third": "To Do",
    },

    changeStatus(key, value) {
        this.list[key] = value;
    },

    addTask(key) {
        this.list[key] = 'To Do';
    },

    deleteTask(key) {
        delete this.list[key];
    },

    showList() {
        console.log(this.list)
    }
}

toDo.deleteTask('first');
toDo.addTask('have a walk');
toDo.showList();