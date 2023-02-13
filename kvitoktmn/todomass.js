const STATUS = {
    TO_DO: 'to do',
    IN_PROGRESS: 'In progress',
    DONE: 'done',
}

const todo = {

    tasks: [
        { taskName: 'task1', taskStatus: STATUS.IN_PROGRESS },
        { taskName: 'task2', taskStatus: STATUS.TO_DO },
        { taskName: 'task3', taskStatus: STATUS.TO_DO },
        { taskName: 'task4', taskStatus: STATUS.DONE },
    ],

    showTask() {
        console.log('-'.repeat(100));
        this.sortTaskByStatus(STATUS.TO_DO);
        this.sortTaskByStatus(STATUS.IN_PROGRESS);
        this.sortTaskByStatus(STATUS.DONE);
    },

    addTask(name) {
        if (this.isTaskEmpty(name)) return;
        const result = this.tasks.find(item => item.taskName === name);

        if (result) {
            console.log(`Задача "${name}" уже есть в списке`)
        } else {
            this.tasks.push({ taskName: name, taskStatus: STATUS.TO_DO });
            console.log(`Задача "${name}" добавлена`);
        }
    },

    changeTaskStatus(name, status) {
        if (this.isTaskEmpty(name)) return;
        const result = this.tasks.find(item => item.taskName === name);

        if (result.taskStatus === status) {
            console.log(`Задача "${name}" уже имеет статус "${status}"`);
            return;
        }

        if (result) {
            result.taskStatus = status;
            console.log(`Статус задачи "${name}" изменён на "${status}"`);
        } else {
            console.log(`Задачи "${name}" в списке нет: невозможно изменить статус`);
        }
    },

    deleteTask(name) {
        if (this.isTaskEmpty(name)) return;
        const result = this.tasks.findIndex(item => item.taskName === name);
        if (result) {
            this.tasks.splice(result, 1);
            console.log(`Задача "${name}" удалена`);
        }
    },

    isTaskEmpty(name) {
        if (!name) {
            console.log('Задача не может быть пустой');
            return true;
        }
    },

    sortTaskByStatus(status) {
        console.log(`${status}:`);
        this.tasks.forEach(task => {
            if (task.taskStatus === status) {
                console.log(`   ${task.taskName}`);
            }
        }
        );
    }
}

todo.addTask('task5');
todo.changeTaskStatus('task1', STATUS.TO_DO);
todo.changeTaskStatus('task1', STATUS.IN_PROGRESS);
todo.addTask();
todo.deleteTask('task3');
todo.showTask();


