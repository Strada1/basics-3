const taskStatus = {
    InProgress: 'In Progress',
    Done: 'Done',
    ToDo: 'To Do',
}

const todo = {
    list: {
        'task1': taskStatus.InProgress,
        'task2': taskStatus.ToDo,
        'task3': taskStatus.Done,
    },

    showList() {
        this.sortTaskByStatus(taskStatus.ToDo);
        this.sortTaskByStatus(taskStatus.InProgress);
        this.sortTaskByStatus(taskStatus.Done);
    },

    sortTaskByStatus(status) {
        console.log(`${status}:`);
        let countOfTasks = 0;
        for (key in this.list) {
            if (this.list[key] === status) {
                countOfTasks++;
                console.log(`   ${key}`);
            }
        }
        if (countOfTasks === 0)
            console.log('-');
    },

    addTask(name) {
        if (name in this.list && name == false) {
            console.log('Не удалось добавить задачу: такая задача уже есть в списке или пустая задача');
        }
        else {
            this.list[name] = taskStatus.ToDo;
            console.log(`Задача "${name}" добавлена`);
        }
    },

    changeStatus(name, status) {
        if (name in this.list && name != false) {
            if (status === taskStatus.ToDo || status === taskStatus.InProgress || status === taskStatus.Done) {
                this.list[name] = status;
                console.log(`Статус задачи "${name}" изменён на "${status}"`);
            }
            else {
                console.log(`Не удалось изменить статус задачи "${name}": указан неправильный статус`);
            }
        }
        else {
            console.log(`Не удалось изменить статус: задачи "${name}" нет в списке`);
        }

    },

    deleteSTask(name) {
        if (name in this.list) {
            delete this.list[name];
            console.log(`Задача "${name}" удалена`);
        }
        else {
            console.log(`Не удалось удалить: задачи "${name}" нет в списке`);
        }
    }

}

todo.addTask('task4');
todo.changeStatus('task3', taskStatus.InProgress);
todo.deleteSTask('task2');
todo.addTask('task5');
todo.showList();