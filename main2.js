const DONE = "Done"
const TO_DO = "To Do"
const IN_PROGRESS = "In Progress"



const list = {
	"create a new practice task": "To Do", 
	"make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
	"write a post": "To Do",
}


const todolist = {
list, 
 addTask(task) {
    this.list[task] = TO_DO;
 },

 deleteTask(task) {
    delete this.list[task]
 },

 changeTaskStatus(task, status) {
    this.list[task] = status
},
    showTask(){
        let a = 0
        let b = 0
        let c = 0

        for(key in this.list) {
            if(this.list[key] === DONE && a == 0) {
                a++
                console.log(`\n ${DONE} : \n ${key} \t`)
            } else if(this.list[key] === DONE && a >= 1) {
                console.log(`${key} \t`)

            }
        }

        for(key in this.list) {
            if(this.list[key] === TO_DO && b == 0) {
                b++
                console.log(`\n ${TO_DO} : \n ${key} \t`)
            } else if(this.list[key] === TO_DO && b >= 1) {
                console.log(`${key} \t`)

            }
        }

        for(key in this.list) {
            if(this.list[key] === IN_PROGRESS && c == 0) {
                c++
                console.log(`\n ${IN_PROGRESS} : \n ${key} \t`)
            } else if(this.list[key] === IN_PROGRESS && c >= 1) {
                console.log(`${key} \t`)

            }

        
        }
        if (a == 0){
            console.log(`\n "Nothing is ${DONE}"\n`)
        }
        if (b == 0){
            console.log(`\n "Nothing is ${TO_DO}"\n`)
    }
    if (c == 0){
        console.log(`\n "Nothing is ${IN_PROGRESS}"\n`)
        }
    }
}

// todolist.changeTaskStatus("make a bed", IN_PROGRESS) // меняет статус задачи
todolist.addTask("Test")
todolist.addTask('Test 2')
todolist.addTask('Test 3')
todolist.addTask('Test 4')
todolist.changeTaskStatus('Test 2', DONE)
// todolist.changeTaskStatus('Test 3', IN_PROGRESS)
todolist.changeTaskStatus('Test 4', DONE)
todolist.deleteTask('write a post'); 
// showList(); // показывает список всех задач



todolist.showTask()
// console.log(list)
