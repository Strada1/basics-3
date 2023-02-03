const status = ['To Do', 'In Progress', 'Done'];
const [toDo, inProgress, done] = status;

const tasksManager = {
    list: {
        'make todo application': inProgress,
        'go to the gym': done,
        'impose two sections of the landing page': done,
        'make dinner': done,
        'clean the kitchen': done,
    },

    deleteTask(task) {
        delete this.list[task];
    },

    addTask(task) {
        this.list[task] = toDo;
    },

    changeStatus(task, condition) {
        switch (condition) {
            case(0): condition =toDo;
                break;
            case(1): condition = inProgress;
                break;
            case(2): condition =done;
                break;
        }
        this.list[task] = condition;
    },
    showList() {
        let toDoArr = [];
        let inProgressArr = [];
        let doneArr = [];
        let toDoString = '';
        let inProgressString = '';
        let doneString = '';
        let tasksList = {};
        for (let key in this.list) {
            if (this.list[key] === toDo) {
                toDoArr.push(key);
                toDoString = toDoArr.join(', ');
            } if (this.list[key] === inProgress) {
                inProgressArr.push(key);
                inProgressString = inProgressArr.join(', ');
            } if (this.list[key] === done) {
                doneArr.push(key);
                doneString = doneArr.join(', ');
            }
        }
        console.log(tasksList = {
            [toDo]: toDoString || 'nothing is being planned',
            [inProgress]: inProgressString || 'nothing is being in progress',
            [done]: doneString || 'nothing has been done',
        });
    }
}


tasksManager.deleteTask('clean the kitchen');
tasksManager.addTask('study Swiper.js documentation');
tasksManager.changeStatus('study Swiper.js documentation', inProgress);
console.log(tasksManager.list);
tasksManager.showList();
