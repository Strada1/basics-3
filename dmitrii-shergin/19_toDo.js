const STATUS = { IN_PROGRESS: 'In Progress', DONE: 'Done', TO_DO: 'To Do', }

const toDoList = {
    list: {},

    addTask(task) {
        if (task) {
            if (!task.trim()) {
                console.log('enter the valid value')
            }
            else if (task in this.list) {
                console.log('this task has already been added')
            }
            else this.list[task] = STATUS.TO_DO
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

    changeStatus(task, status) {
        const statusValues = this.getObjectValues(STATUS)

        if (!(task && status)) {
            console.log('enter the valid value')
        }
        else if (!(task in this.list)) {
            console.log('there is no this task in list')
        }
        else if (!(status in statusValues)) {
            console.log('enter the valid status')
        }
        else {
            this.list[task] = status
        }
    },

    getObjectValues(obj) {
        objValues = {}
        for (let key in obj) {
            objValues[obj[key]] = ''
        }
        return objValues
    },

    showList(statusValue) {
        const listStatuses = this.getObjectValues(this.list)
        const statusValues = this.getObjectValues(STATUS)

        if (statusValue) {
            if (statusValue in statusValues) {
                if (!(statusValue in listStatuses)) {
                    console.log(`${statusValue}: \n \t -`)
                }
                else {
                    console.log(`${statusValue}:`)
                }
                for (let listTask in this.list) {
                    let listStatus = this.list[listTask]
                    if (listStatus === statusValue) {
                        console.log(`\t - ${listTask}`)
                    }
                }
            }
            else {
                console.log('enter the valid status')
            }
        }
        else {
            for (let statusValue in statusValues) {
                if (!(statusValue in listStatuses)) {
                    console.log(`${statusValue}: \n \t -`)
                }
                else {
                    console.log(`${statusValue}:`)
                }
                for (let key in this.list) {
                    let listStatus = this.list[key]
                    if (listStatus === statusValue) {
                        console.log(`\t - ${key}`)
                    }
                }
            }
        }
    },
}

toDoList.addTask('learn JS')
toDoList.addTask('learn English')
toDoList.addTask('go to sleep')
toDoList.addTask('go for a walk')
toDoList.changeStatus('go for a walk', STATUS.IN_PROGRESS)
toDoList.changeStatus('go to sleep', STATUS.DONE)
toDoList.deleteTask('learn English')

toDoList.showList(STATUS.TO_DO)
toDoList.showList()
