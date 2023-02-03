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

    showList() {
        console.log(this.list)
    }
}

toDo.addTask('have a walk');
toDo.showList();