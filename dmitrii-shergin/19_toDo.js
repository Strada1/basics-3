const STATUS = { IN_PROGRESS: 'In Progress', DONE: 'Done', TO_DO: 'To Do', }

const toDoList = {
    list: {},

    changeStatus(task, status) {
        if (!(task && status)) {
            console.log('enter the valid value')
        }
        else if (!(task in this.list)) {
            console.log('there is no this task in list')
        }
        else if (!(
            status === STATUS.DONE ||
            status === STATUS.TO_DO ||
            status === STATUS.IN_PROGRESS)) {
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

    showList(status) {
        const currentTaskStatuses = {}

        for (key in this.list) {
            currentTaskStatuses[this.list[key]] = ''
        }

        if (status) {
            if (status === STATUS.DONE ||
                status === STATUS.IN_PROGRESS ||
                status === STATUS.TO_DO) {
                if (!(status in currentTaskStatuses)) {
                    console.log(`${status}: \n \t -`)
                }
                else {
                    console.log(`${status}:`)
                }
                for (let key in this.list) {
                    let value = this.list[key]
                    if (value === status) {
                        console.log(`\t - ${key}`)
                    }
                }
            }
            else {
                console.log('enter the valid status')
            }
        }
        else {
            for (let status in STATUS) {
                if (!(STATUS[status] in currentTaskStatuses)) {
                    console.log(`${STATUS[status]}: \n \t -`)
                }
                else {
                    console.log(`${STATUS[status]}:`)
                }
                for (let key in this.list) {
                    if (this.list[key] === STATUS[status]) {
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
toDoList.deleteTask('go to sleep')

toDoList.showList()
