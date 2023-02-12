const TODO = 'To Do';
const INPROGRESS = 'In Progress';
const DONE = 'Done';
const LOW = 'low';
const HIGH = 'high'

const toDo = {
    list: [
        {
            name: 'приготовить обед', 
            status: TODO, 
            priority: LOW
        }
    ],
    addTask(task, statusName, priorityName) {
        let i = 0;
        for (const item of this.list) {
            if (item.name === task) {
                console.log ('Такая задача уже существует');
                break;                
            }
            i++;
        }
        if (i === this.list.length) {
            this.list.push({name: task, status: statusName, priority: priorityName});
            console.log('Задача добавлена');
        }
    },
    deleteTask(task) {
        let i = 0;
        for (const item of this.list) {
            if (item.name === task) {
                console.log ('Эврика, удаляем!');
                this.list.splice(i,1);
                break;
            }
            i++;
        }
        if (i === this.list.length) {
            console.log ('Задача не найдена!');
        }
    },
    changeStatus(task, statusName) {
        let i = 0;
        for (const item of this.list) {
            if (item.name === task) {
                item.status = statusName;
                console.log ('Статус изменен');
                break;
            }
            i++;
        }
        if (i === this.list.length) {
            console.log ('Задача не найдена!');
        }
    },
    showStatus(statusName) {
        let i = 0;
        console.log(statusName);
        for (const item of this.list) {
            if (item.status === statusName) {
                i++;
                console.log(item.name+":", item.status, `(приоритет ${item.priority})`);
            }
        }
        if (i === 0) {
            console.log("Nothing is", statusName);
        } 
    },
    showList() {
        this.showStatus (TODO);
        this.showStatus (INPROGRESS);
        this.showStatus (DONE);
    }
}
toDo.addTask('сделать зарядку', TODO, LOW);
toDo.addTask('приготовить завтрак', INPROGRESS, HIGH);
toDo.addTask('приготовить обед', INPROGRESS, HIGH);
toDo.addTask('приготовить ужин', INPROGRESS, LOW);
toDo.addTask('сделать домашнее задание', INPROGRESS, LOW);
toDo.deleteTask('сделать зарядку');
toDo.changeStatus('приготовить завтрак', DONE);
toDo.showList();

