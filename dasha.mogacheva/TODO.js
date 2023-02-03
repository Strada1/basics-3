const toDoList = {

    list: {
        'go to the shop': 'Done',
        'cook dinner': 'In progress',
        'call Mom': 'To do',
    },

    addTask() {
        let name = prompt('Enter the name of task', '');
        if (name in this.list) {
            console.log('This task already exist');
            return;
        }
        let status = prompt('Enter status of task. Choose 1 (done), 2 (in progress) or 3 (to do)', '');
        switch (status) {
            case "1":
                this.list[name] = 'Done';
                console.log('New task has been successfully created');
                break;
            case "2":
                this.list[name] = 'In progress';
                console.log('New task has been successfully created');
                break;
            case "3":
                this.list[name] = 'To do';
                console.log('New task has been successfully created');
                break;
            default:
                console.log('You entered the task status incorrectly');
                break;
        }
    },

    deleteTask() {
        let name = prompt('Enter the name of task', '');
        if (name in this.list) {
            delete this.list[name];
            console.log('This task was deleted');
        } else {
            console.log('This task does not exist');
        }
    },

    changeStatus() {
        let name = prompt('Enter the name of task', '');
        if (name in this.list) {
            let status = prompt('Enter status of task. Choose 1 (done), 2 (in progress) or 3 (to do)', '');
            switch (status) {
                case "1":
                    this.list[name] = 'Done';
                    console.log('Task status was successfully changed');
                    break;
                case "2":
                    this.list[name] = 'In progress';
                    console.log('Task status was successfully changed');
                    break;
                case "3":
                    this.list[name] = 'To do';
                    console.log('Task status was successfully changed');
                    break;
                default:
                    console.log('You entered the task status incorrectly');
                    break;
            }
        } else {
            console.log('This task does not exist');
        }
    },

    showList() {
        console.log(this.list);
    },

    chooseAction() {
    let action = prompt('Please choose what to do. Enter 1 to add a task, enter 2 to remove a task, enter 3 to change the status of a task, or enter 4 to show list the tasks', '');
        switch (action) {
            case "1":
                this.addTask();
                break;
            case "2":
                this.deleteTask();
                break;
            case "3":
                this.changeStatus();
                break;
            case "4":
                this.showList();
                break;
            default:
                console.log('You entered the wrong action. Try again');
                break;
        }
    }
}

toDoList.chooseAction();
