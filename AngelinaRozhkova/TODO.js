const TODO = {
    taskList: {
        "create a new practice task": "In Progress", 
        "make a bed": "Done", 
        "write a post": "To Do",
        "do english exercises" : "Done",
        "read a book" : "In progress"
    },
    addTask(name, status) {
        if  ([name] in this.taskList) {
            console.log('Уже есть в списке');
           }  else {
            this.taskList[name] = status;
           }; 
    },

    changeStatus(name, status){
       if  ([name] in this.taskList) {
        this.taskList[name] = status;
       }  else {
        console.log('Нет в списке, не могу изменить');
       };
    },

    deleteTask(name) {
        if  ([name] in this.taskList) {
            delete  this.taskList[name];
           }  else {
            console.log('Нет в списке, не могу удалить');
           };
    },

    showList() {
        for (const name in TODO.taskList) {
            console.log(TODO.taskList[name]+" : "+ "\n"+'       "'+name+'"');
        };
        
    }
};




TODO.changeStatus("read a book", "Done"); // меняет статус задачи
TODO.changeStatus("read the newspaper", "Done"); 
TODO.addTask('have a walk', "To Do"); // добавляет новую задачу
TODO.addTask("read a book", "In progress"); 
TODO.deleteTask('do english exercises'); // удаляет задачу
TODO.deleteTask("read the newspaper", "Done"); 

TODO.showList(); // показывает список всех задач



