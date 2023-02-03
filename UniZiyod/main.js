// #19 Практика ToDo

const todoList = {
    listofTasks: {
        'Изучить копирование объектов JS': 'To Do',
        'Пройти урок в Strada': 'In Progress',
        'Написать статью для заказчика': 'Done',
    },
    addTask(task) {
        this.listofTasks[task] = 'To Do';
    },
    changeTask(task, status) {
        this.listofTasks[task] = status;
    },
    deleteTask(name) { // Удаление задачи
        delete this.listofTasks[name]
    },
    showTask() { // Показ всех задач
        let a = 0;
        let b = 0;
        let c = 0;
        for (key in this.listofTasks) {
            if (this.listofTasks[key] === 'Done' && a == 0) {
                a++
                console.log(`\n${key} :\t ${this.listofTasks[key]}`);
            } else if (this.listofTasks[key] === 'Done' && a >= 1) {
                console.log(`${key} :\t ${this.listofTasks[key]}`);
            }
        }

        for (key in this.listofTasks) {
            if (this.listofTasks[key] === 'To Do' && b == 0) {
                b++
                console.log(`\n${key} :\t ${this.listofTasks[key]}`);
            } else if (this.listofTasks[key] === 'To Do' && b >= 1) {
                console.log(`${key} :\t ${this.listofTasks[key]}`);
            }
        }

        for (key in this.listofTasks) {
            if (this.listofTasks[key] === 'In Progress' && c == 0) {
                c++
                console.log(`\n${key} :\t ${this.listofTasks[key]}`);
            } else if (this.listofTasks[key] === 'In Progress' && c >= 1) {
                console.log(`${key} :\t ${this.listofTasks[key]}`);
            }
        }

    }

}
todoList.addTask('Смонтировать видео')
todoList.addTask('Попить кофе')
todoList.addTask('Поесть торт')
todoList.changeTask('Смонтировать видео', 'Done')
todoList.changeTask('Поесть торт', 'In Progress')
todoList.showTask()