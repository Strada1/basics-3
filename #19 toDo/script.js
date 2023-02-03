const toDo = {
    list: {
        "create a new practice task": "Todo",
        "make a bed": "In Progress",
        "write a post": "Done",
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
        for (let item in this.list) {
            switch (this.list[item]) {
                case 'Todo':
                    console.log(`"${item}" : Todo`);
                    break;
                case 'In Progress':
                    console.log(`"${item}" : In Progress`);
                    break;
                case 'Done':
                    console.log(`"${item}" : Done`);
                    break;
                default:
                    console.log(`"${item}" : incorrect value`);
            }
        }
        if (!Object.values(this.list).includes('Done')) {
            console.log('Nothing is done')
        }
    }
}

toDo.showList();