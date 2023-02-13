const toDoList = {               // список задач c проверкой на Nothing, без "бонусной" задачи
    list: {
        "Wake up": "Done",
        "Make a bed": "ToDo",
        "Have a breakfast": "Done",
        "Go to work": "Done",
        "Learn JS": "In Progress",
        "Make chores": "ToDo", 
    },

    showList() {
    let flagDone = true;
    let flagToDo = true;
    let flagInProgress = true;

    
            for (const task in this.list) {
            
            switch(this.list[task]) {
                
                case 'Done':
                    console.log('Done: ' + `${task}`);
                    flagDone = false;
                    break;
            };
                
        };
    
        for (const task in this.list) {
            switch(this.list[task]) {

                case 'ToDo':
                    console.log('ToDo: ' + `${task}`);
                    flagToDo = false;
                    break;
            };
                
        };
  
        for (const task in this.list) {
            switch(this.list[task]) {

                 case 'In Progress':
                    console.log('In Progress: ' + `${task}`);
                    flagInProgress = false;
                    break;
            };
                
        }; 
        if (flagDone) {
            console.log('Nothing is Done');
        };

        if (flagToDo) {
            console.log('Nothing is ToDo');
        };

        if (flagInProgress) {
            console.log('Nothing is In Progress');
        }

    },
    addTask(task, status = 'ToDo') {
        if (task in this.list) {
            console.log(`${task}` + ' - this task is already in your List');
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
toDoList.deleteTask('Go to work'); // удаляем задачу
toDoList.showList(); // снова выводим весь список