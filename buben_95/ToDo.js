const listToDo = {
    list: {
	"create a new practice task": "In Progress", 
	"make a bed": "Done",
	"write a post": "To Do"
    },
    changeStatus(task, status) {
        this.list[task] = status;
    },
    addTask(task) {
        this.list[task];
    },
    deleteTask(task) {
        delete this.list[task];
    },
    showList() {
        for (const task in this.list) {
            if (this.list[task] === 'To Do') {
                console.log(`${task} - ${listToDo.list[task]}`);
              } else if (this.list[task] === 'In Progress') {
                console.log(`${task} - ${listToDo.list[task]}`);
              } else if (this.list[task] === 'Done') {
                console.log(`${task} - ${listToDo.list[task]}`);
              } else {console.log(`${task} - invalid status`);
              }       
            } 
        if (!Object.values(this.list).includes('Done')) {
                console.log('Nothing is done!');
        }
    }
        
};

listToDo.addTask("wash the clothes");
listToDo.addTask("house cleaning");
listToDo.addTask("go to the gym");

listToDo.changeStatus("make a bed", "To Do");
listToDo.changeStatus("house cleaning", "In Progress");
listToDo.changeStatus("wash the clothes", "To D");
listToDo.changeStatus("go to the gym", "In Progress");

listToDo.showList();