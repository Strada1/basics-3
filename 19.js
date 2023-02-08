const affairs = {
    list: {
    'Strada': 'In progress',
    'Everyday Walk': 'To Do',
    'To talk with friend': 'To Do'
    },
    AddOrDelete(write, task, status) {
        switch (write) {
            case 'Add Task':
                this.list[task] = status;
                console.log('Задача' + ' ' + `${task}` + " " + 'со статусом:' + ' ' + `${status}` + ' ' + 'была успешно добавлена!');
                return;
            case 'Delete Task':
                delete this.list[task];
                console.log('Задача' + ' ' + `${task}` + ' ' + 'была успешно удалена!');
        }
    },
    changeTaskStatus(task, status) {
        if (task in this.list) {
            this.list[task] = status;
            console.log('Статус задачи' + ' ' + `${task}` + ' ' + 'был успешно изменен!');
            console.log('Актуальный статус задачи:' + ' ' + `${status}`);
        }
    },
    showTasks() {
        const show = {};
        Object.assign(show, this.list);
        console.log(show)
    }
}

affairs.AddOrDelete('Add Task','Walk with my dog', 'In progress');

affairs.changeTaskStatus('To talk with friend', 'In progress');

affairs.AddOrDelete('Delete Task', 'Everyday Walk');

affairs.showTasks();
