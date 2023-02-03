const list = {
	"create a new practice task": "In Progress", 
	"make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
	"write a post": "To Do",
}

const todoList = {
    list,
    addTask(task) {
        this.list[task] = 'In Progress'
    },
    deleteTask(task) {
        delete this.list[task]
    },

    changeStatus(task, status) {
        this.list[task] = status
    },
    showList() {
        a = 0;
        b = 0;
        c = 0;
        for(key in this.list) {
            if(this.list[key] === 'Done' && a == 0) {
                a++
                console.log(`\n${key} : \t${this.list[key]}`)
            } else if(this.list[key] === 'Done' && a >= 1) {
                console.log(`${key} : \t${this.list[key]}`)
            }
        }
        for(key in this.list) {
            if(this.list[key] === 'To Do' && b == 0) {
                b++
                console.log(`\n${key} : \t${this.list[key]}`)
            } else if(this.list[key] === 'To Do' && b >= 1) {
                console.log(`${key} : \t${this.list[key]}`)
            }
        }

        for(key in this.list) {
            if(this.list[key] === 'In Progress' && c == 0) {
                c++
                console.log(`\n${key} : \t${this.list[key]}`)
            } else if(this.list[key] === 'In Progress' && c >= 1) {
                console.log(`${key} : \t${this.list[key]}`)
            }
        }

        if(a == 0) {
            console.log(`\n\'Nothink is \'Done\'`)
        }
        if(b == 0) {
            console.log(`\n\'Nothink is \'To Do\'`)
        }

        if(c == 0) {
            console.log(`\n\'Nothink is \'In Progress\'`)
        }



    }

}


todoList.addTask('first todo'); // добавляет новую задачу
todoList.changeStatus("first todo", "To Do") // меняет статус задачи
todoList.addTask('second todo'); // добавляет новую задачу
todoList.changeStatus("second todo", "To Do") // меняет статус задачи

todoList.addTask('first done'); // добавляет новую задачу
todoList.changeStatus("first done", "Done") // меняет статус задачи
todoList.addTask('second done'); // добавляет новую задачу
todoList.changeStatus("second done", "Done") // меняет статус задачи

todoList.addTask('first in proces'); // добавляет новую задачу
todoList.addTask('second in proces'); // добавляет новую задачу





todoList.showList(); // показывает список всех задач