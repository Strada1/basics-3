const toDo = {
    list: {
    'new task': 'in progress',
    'learning': 'To Do',
    'cleaning': 'in progress'
    },
addTask(name, status) {
    this.list[name] = status;
    },
deleteTask(name) {
    delete toDo.list[name];
    },
changeStatusTask(name, status) {
    toDo.list[name] = status;
    },
showtask() {
        for (const status in this.list) {
            this.list[status] !== 'Done'
            ? console.log('Nothing is Done')
            : console.log(this.list);
        }
    }
};





toDo.addTask('boom', 'Done');
toDo.deleteTask('boom');
toDo.changeStatusTask('cleaning', 'To Do');
toDo.changeStatusTask('learning', 'Done');
toDo.showtask();
