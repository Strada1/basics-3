const list = {
    "create a new practice task": "In Progress", 
	"make a bed": "Done", 
	"write a post": "To Do",
}

const statuses = {
TODO: "To Do",
DONE: "Done",
IN_PROGRESS: "In Progress",
FLAG: false
}

const todoList = {
    list,
    addTask(task) {
        this.list[task] = statuses.TODO
    },
     deleteTask(task) {
      delete this.list[task]
    },
    changeStatus (task, status) {
       this.list[task] = status
    },
    showList(){
    for(key in this.list) {
        if(this.list[key] === statuses.TODO && !statuses.FLAG) {
           statuses.FLAG = true
            console.log(`\n${key} : ${this.list[key]}`)
        } else if (this.list[key] === statuses.TODO && statuses.FLAG) {
            console.log(`${key} : ${this.list[key]}`)
        }
    } statuses.FLAG = false
    for(key in this.list) {
        if(this.list[key] === statuses.DONE && !statuses.FLAG) {
            statuses.FLAG = true
            console.log(`\n${key} : ${this.list[key]}`)
        } else if (this.list[key] === statuses.DONE && statuses.FLAG) {
            console.log(`${key} : ${this.list[key]}`)
        }
    }statuses.FLAG = false
 for(key in this.list) {
        if(this.list[key] === statuses.IN_PROGRESS && !statuses.FLAG) {
            statuses.FLAG = true
            console.log(`\n${key} : ${this.list[key]}`)
        } else if (this.list[key] === statuses.IN_PROGRESS && statuses.FLAG) {
            console.log(`${key} : ${this.list[key]}`)
        }
    }statuses.FLAG = false
   }
    }


todoList.changeStatus("write a post", "Done") // меняет статус задачи
todoList.addTask('have a walk'); // добавляет новую задачу
todoList.deleteTask('have a walk'); // удаляет задачу
todoList.addTask("help")
todoList.addTask("wrap01")
todoList.showList(); // показывает список всех задач

