const ToDo = {
    taskList: { // список задач
        'makeObj': 'in progress',
        'make home work': 'in progress'
    },
    viewTaskList() { //метод просмотра задач
        console.log('');
        if (this.taskList) {
            let globalToDoStatus = 0; // останется нулём, если нет задач со статусом done
            let checkTask = 0; // останется нулём, если нет незавершённых задач в списке
            let i = 0; //
            console.log('To Do:');
            for (const name in ToDo.taskList) {
                if (ToDo.taskList[name] === 'To Do') {
                    i = i + 1;
                    checkTask = checkTask + 1;
                    console.log('   ' + name);
                }
            }
            if (i === 0) {
                console.log('-')
            }
            console.log('In progress:');
            i = 0;
            for (const name in ToDo.taskList) {
                if (ToDo.taskList[name] === 'in progress') {
                    i = i + 1;
                    checkTask = checkTask + 1;
                    console.log('   ' + name);
                }
            }
            if (i === 0) {
                console.log('-')
            }
            console.log('Done:');
            i = 0;
            for (const name in ToDo.taskList) {
                if (ToDo.taskList[name] === 'Done') {
                    i = i + 1;
                    checkTask = checkTask + 1;
                    globalToDoStatus = globalToDoStatus + 1;
                    console.log('   ' + name);
                }
            }
            if (i === 0) {
                console.log('-')
            }
            if (globalToDoStatus === 0 && checkTask !== 0) { // проверка на наличие выполненных задач
                console.log('');
                console.log('Nothing is done!');
            }
            else if (checkTask === 0 && globalToDoStatus === 0) { // если список задач пуст
                console.log('No tasks!');
            }
        }
    },
    addTask(task) { // метод добавления задач
        this.taskList[task] = 'To Do'; // создаёт задачу сразу с валидным статусом
        console.log('');
        console.log(task + ' added to task list!');
    },
    deleteTask(task) { // метод удаления задач
        delete this.taskList[task];
        console.log('');
        console.log(task + ' deleted from task list!');
    },
    deleteAllTasks() { // метод удаления ВСЕХ задач
        for (const name in ToDo.taskList) {
           delete this.taskList[name];
        }
        console.log('All tasks deleted!');
    },
    changeStatus(task, newStatus) { // метод изменения статуса задачи
        if (this.taskList[task]) { // проверка на содержание задачи в тасклисте
            switch (newStatus) {
                case 'To Do':
                    this.taskList[task] = newStatus;
                    console.log('');
                    console.log(task + ' status changed to ' + newStatus);
                    break;
                case 'in progress':
                    this.taskList[task] = newStatus;
                    console.log('');
                    console.log(task + ' status changed to ' + newStatus);
                    break;
                case 'Done':
                    this.taskList[task] = newStatus;
                    console.log('');
                    console.log(task + ' status changed to ' + newStatus);
                    break;
                default:
                    console.log('Invalid status!'); // проверка на правильность статуса
                    break;
            }
        }
        else { // сообщение, если задача не найдена
            console.log('');
            console.log('Task ' + task + ' does not exist!');
        }
    }
}

ToDo.viewTaskList();
ToDo.addTask('listenMusic');
ToDo.addTask('createMethods');
ToDo.viewTaskList();
ToDo.changeStatus('createMethods', 'Done');
ToDo.changeStatus('makeObj', 'Don');
ToDo.changeStatus('makeObj', 'Done');
ToDo.viewTaskList();
ToDo.deleteTask('listenMusic');
ToDo.changeStatus('listenMusic', 'Done');
ToDo.deleteAllTasks();
ToDo.viewTaskList();


