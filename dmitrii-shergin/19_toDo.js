const IN_PROGRESS = 'IN PROGRESS'
const DONE = 'DONE'
const TO_DO = 'TO DO'

const statuses = { IN_PROGRESS, DONE, TO_DO }

const list = {
    "create a new practice task": IN_PROGRESS,
    "make a bed": DONE,
    "write a post": TO_DO,
}

const toDoList = {
    list,
    statuses,
    changeStatus(task, status) {
        this.list[task] = status
    },
    addTask(task) {
        this.list[task] = TO_DO
    },
    deleteTask(task) {
        delete this.list[task]
    },
    values() {
        return Object.values(this.list)
    },
    showList(status) {
        if (status) {
            console.log(`${status}:`)
            if (this.values().includes(status)) {
                for (let key in this.list) {
                    let value = this.list[key]
                    if (value === status) {
                        console.log(`\t ${key}`)
                    }
                }
            }
            else {
                console.log(`\t -`)
            }
        }
        else {
            for (let status in this.statuses) {
                console.log(this.statuses[status])
                if (this.values().includes(this.statuses[status])) {
                    for (let key in this.list) {
                        if (this.list[key] === this.statuses[status]) {
                            console.log(`\t ${key}`)
                        }
                    }
                }
                else {
                    console.log(`\t -`)
                }
            }
        }
    }
}

toDoList.changeStatus('write a post', 'DONE')
toDoList.addTask('to go for a walk')
toDoList.deleteTask('write a post')
toDoList.deleteTask('make a bed')
toDoList.addTask('learn JS')
toDoList.addTask('learn English')

toDoList.showList(DONE)
/*
DONE:
     -
*/

toDoList.showList()
/*
IN PROGRESS
     create a new practice task
DONE
     -
TO DO
     to go for a walk
     learn JS
     learn English
*/

toDoList.showList(IN_PROGRESS)
/*
IN PROGRESS:
     create a new practice task
*/