const toDo = {
    list: {
        "Make the task Strada": "To Do",
        "Go to the shop": "To Do",
        "Call the provider": "To Do"
    },
    addTask(nameTask, progressTask) {
        this.list[nameTask] = progressTask;
    },
    changeStatus(nameTask, progressTask) {
        this.list[nameTask] = progressTask;
    },
    deleteTask(nameTask) {
       delete this.list[nameTask];
    },
    showList() {
        let toDoCount = 0;
        let inProgressCount = 0;
        let completeCount = 0;
        for (nameTask in toDo.list) {
            if (toDo.list[nameTask] == 'To Do') {
                console.log('"' + nameTask + '"' + ': ' + toDo.list[nameTask]);
                toDoCount++;
            }
        }

        for (nameTask in toDo.list) {
            if  (toDo.list[nameTask] == 'In Progress') {
                console.log('"' + nameTask + '"' + ': ' + toDo.list[nameTask]);
                inProgressCount++;
            }
        }
        for (nameTask in toDo.list) {
                if (toDo.list[nameTask] == 'Complete') {
                    console.log('"' + nameTask + '"' + ': ' + toDo.list[nameTask]);
                    completeCount++;
                }

            }
            if (toDoCount === 0) {
                console.log('Nothing is To Do');
            }
            if (inProgressCount == 0) {
                console.log('Nothing is In Progress');
            }
            if (completeCount === 0) {
                console.log('Nothing is Complete');
            }            
        }
    }

toDo.addTask('Call in John', 'In Progress'); // добавили в toDo -> list
toDo.addTask('Set up the TV', 'To Do'); // добавили в toDo -> list
toDo.addTask('Make a sink', 'In Progress');
toDo.changeStatus('Set up the TV', 'Complete'); // изменили статус на Complete  
toDo.deleteTask('Set up the TV'); // удалили
toDo.showList(); // вывели
