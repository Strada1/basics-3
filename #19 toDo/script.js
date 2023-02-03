const toDo = {
    list: {
        "create a new practice task": "Todo",
        "make a bed": "In Progress",
        "write a post": "Todo",
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
            // if (this.list[item] === 'Todo') {
            //     console.log(`"${item}" : Todo`)
            // }
            // if (this.list[item] === 'In Progress') {
            //     console.log(`"${item}" : In Progress`)
            // }
            // if (this.list[item] === 'Done') {
            //     console.log(`"${item}" : Done`)
            // }
            // if ('Done' in Object.values(this.list)) {
            //     console.log('nothing is done')
            // }
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
    }
}

toDo.showList();


// for (const name in phoneBook.list) {
//     console.log(name); // John
//     console.log(phoneBook.list[name]); // 123456789
// }