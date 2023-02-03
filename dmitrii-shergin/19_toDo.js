const IN_PROGRESS = 'IN_PROGRESS'
const DONE = 'DONE'
const TO_DO = 'TO_DO'

const toDoList = {
    list: {},
    statuses: { IN_PROGRESS, DONE, TO_DO },

    changeStatus(task, status) {
        if (!(task && status)) {
            console.log('enter the valid value')
        }
        else if (!(task in this.list)) {
            console.log('there is no this task in list')
        }
        else if (!(status in this.statuses)) {
            console.log('enter the valid status')
        }
        else {
            this.list[task] = status
        }
    },

    addTask(task) {
        if (task) {
            if (!task.trim()) {
                console.log('enter the valid value')
            }
            else if (task in this.list) {
                console.log('this task has already been added')
            }
            else this.list[task] = TO_DO
        }
        else {
            console.log('enter the valid value')
        }
    },

    deleteTask(task) {
        if (task in this.list) {
            delete this.list[task]
        }
        else {
            console.log('there is no this task in list')
        }
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
                console.log(`${status}:`)
                if (this.values().includes(status)) {
                    for (let key in this.list) {
                        if (this.list[key] === status) {
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

toDoList.addTask('to go for a walk')
toDoList.addTask('learn JS')
toDoList.addTask('learn English')
toDoList.changeStatus('learn English', IN_PROGRESS)
//toDoList.changeStatus('to go for a walk', DONE)


//toDoList.showList()
toDoList.showList(DONE)
toDoList.showList(IN_PROGRESS)
toDoList.showList(TO_DO)
