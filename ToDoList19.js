const toDoList = {               // список задач, без проверки на Nothing
    list: {
        "Wake up": "Done",
        "Make a bed": "ToDo",
        "Have a breakfast": "Done",
        "Go to work": "Done",
        "Learn JS": "In Progress",
        "Make chores": "ToDo", 
    },
    showList() {
        for (const task in this.list) {
            switch(this.list[task]) {

                case 'Done':
                    console.log(`"${task}"` + ': ' + 'Done');
                    break;
            };
                
        };
        for (const task in this.list) {
            switch(this.list[task]) {

                case 'ToDo':
                    console.log(`"${task}"` + ': ' + 'ToDo');
                    break;
            };
                
        };
        for (const task in this.list) {
            switch(this.list[task]) {

                 case 'In Progress':
                    console.log(`"${task}"` + ': ' + 'In Progress');
                    break;
            };
                
        };                     
    },
    addTask(task, status = 'ToDo') {
        if (task in this.list) {
            console.log(`"${task}"` + ' - this task is already in your List');
        } else {
            toDoList.list[task] = status;
        };
        
    },
    changeStatus(task, status) {
        toDoList.list[task] = status;
    },
    deleteTask(task) {
        delete this.list[task];
    }

};

toDoList.addTask('Go for a walk'); //добавляем новую задачу
toDoList.showList(); // выводим весь список задач
console.log('--------------------------------------------------');
toDoList.addTask('Wake up'); //пытаемся добавить уже существующую задачу
toDoList.changeStatus('Go for a walk', 'In Progress') // меняем статус задачи
toDoList.showList(); // снова выводим весь список