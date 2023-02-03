const DONE = 'Done'
const TO_DO = 'To Do'
const IN_PROGRESS = 'In Progress'

const list = {
	"create a new practice task": IN_PROGRESS, 
	"make a bed": TO_DO, // задача "заправить кровать" в статусе "Готово"
	"write a post": TO_DO,
}

const statuses = {DONE, TO_DO, IN_PROGRESS}

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
                console.log(`\n${DONE}:\n${key}  \t`)
            } else if(this.list[key] === 'Done' && a >= 1) {
                console.log(`${key}  \t`)
            }
        }
        for(key in this.list) {
            if(this.list[key] === 'To Do' && b == 0) {
                b++
                console.log(`\n${TO_DO}:\n${key}  \t`)
            } else if(this.list[key] === 'To Do' && b >= 1) {
                console.log(`${key}  \t`)
            }
        }

        for(key in this.list) {
            if(this.list[key] === 'In Progress' && c == 0) {
                c++
                console.log(`\n${IN_PROGRESS}:\n${key}  \t`)
            } else if(this.list[key] === 'In Progress' && c >= 1) {
                console.log(`${key} \t`)
            }
        }

                if(a == 0) {
                    console.log(`\n\"Nothing is ${DONE}\"\n`)
                }
                if(b == 0) {
                    console.log(`\n\"Nothing is ${TO_DO}\"\n`)
                }if(c == 0) {
                    console.log(`\n\"Nothing is ${IN_PROGRESS}\"\n`)
                }

    }

}


todoList.addTask('first todo'); // добавляет новую задачу
todoList.changeStatus("first todo", "To Do") // меняет статус задачи
todoList.addTask('second todo'); // добавляет новую задачу
todoList.changeStatus("second todo", "To Do") // меняет статус задачи

todoList.addTask('first done'); // добавляет новую задачу
// todoList.changeStatus("first done", "Done") // меняет статус задачи
todoList.addTask('second done'); // добавляет новую задачу
// todoList.changeStatus("second done", "Done") // меняет статус задачи

todoList.addTask('first in proces'); // добавляет новую задачу
todoList.addTask('second in proces'); // добавляет новую задачу





todoList.showList(); // показывает список всех задач