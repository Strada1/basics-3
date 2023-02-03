const taskStatus = {
    InProgress: 'In Progress',
    Done: 'Done',
    ToDo: 'ToDo',
}

const todo = {
    count: 0,

    list: {
        'task1': taskStatus.InProgress,
        'task2': taskStatus.ToDo,
        'task3': taskStatus.Done,
    },
    
    showList(){
        this.sortTask(taskStatus.ToDo);
        this.sortTask(taskStatus.InProgress);
        this.sortTask(taskStatus.Done);
        return `Всего задач: ${this.count}`;
    },

    sortTask(status){
        console.log(`${status}:`);
        let i = 0;
        for(key in this.list){
            this.count ++;
            if(this.list[key] === status){
                i++;
                console.log(`   ${key}`);
            }
        }
        if(i === 0)
        console.log('-');
    },

    addTask(name){
        if(name in this.list && name == false){
            return 'Не удалось добавить задачу: такая задача уже есть в списке или пустая задача';
        }
        else{
            this.list[name] = taskStatus.ToDo;
            return `Задача "${name}" добавлена`;
        }
    },

    changeStatus(name, status){
        if(name in this.list && name != false){
            this.list[name] = status;
            return `Статус задачи "${name}" изменён на "${status}"`;
        }
        else{
            return `Не удалось изменить статус: задачи "${name}" нет в списке`;
        }
    },

    deleteSTask(name){
        if(name in this.list){
            delete this.list[name];
            return `Задача "${name}" удалена`;
        }
        else{
            return `Не удалось удалить: задачи "${name}" нет в списке`;
        }
    }
    
}

console.log(todo.changeStatus('firstt', taskStatus.Done));
console.log(todo.addTask('task4'));
console.log(todo.addTask('task5'));
console.log(todo.changeStatus('task5', taskStatus.InProgress));
console.log(todo.deleteSTask('task3'));
console.log(todo.addTask('task6'));
console.log(todo.changeStatus('task6', taskStatus.Done));
console.log(todo.deleteSTask('task6'));
console.log(todo.showList());