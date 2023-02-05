const STATUS = { IN_PROGRESS: 'In Progress', DONE: 'Done', TO_DO: 'To Do', }

const ERRORS = {
    VALID_VALUE: 'enter the valid value',
    TASK_EXIST: 'this task has already been added',
    TASK_EMPTY: 'there is no such task or status',
}

const toDoList = {
    list: {},

    addTask(task) {
        let message = this.utils.check(task, this.list, false)

        if (message) {
            console.log(message)
        } else {
            this.list[task] = STATUS.TO_DO
        }
    },

    deleteTask(task) {
        let message = this.utils.check(task, this.list, true)

        if (message) {
            console.log(message)
        } else {
            delete this.list[task]
        }
    },

    changeStatus(task, status) {
        const statusValues = this.utils.getObjectValues(STATUS)

        let messageTask = this.utils.check(task, this.list, true)
        let messageStatus = this.utils.check(status, statusValues, true)

        let message = (messageTask) ? messageTask : (messageStatus) ? messageStatus : ''

        if (message) {
            console.log(message)
        } else {
            this.list[task] = status
        }
    },

    showList(statusValue) {
        const listStatuses = this.utils.getObjectValues(this.list)
        const statusValues = this.utils.getObjectValues(STATUS)

        if (statusValue) {
            let message = this.utils.check(statusValue, statusValues, true)
            if (message) {
                console.log(message)
            } else {
                this.utils.showHelper(statusValue, listStatuses, this.list)
            }
        } else {
            for (statusValue in statusValues) {
                this.utils.showHelper(statusValue, listStatuses, this.list)
            }
        }
    },

    utils: {
        getObjectValues(obj) {
            objValues = {}
            for (let key in obj) {
                objValues[obj[key]] = ''
            }
            return objValues
        },

        check(key, obj, shouldKeyExist) {
            switch (true) {
                case !key: {
                    return ERRORS.VALID_VALUE
                }
                case !key.trim(): {
                    return ERRORS.VALID_VALUE
                }
                case !shouldKeyExist && (key in obj): {
                    return ERRORS.TASK_EXIST
                }
                case shouldKeyExist && (!(key in obj)): {
                    return ERRORS.TASK_EMPTY
                }
            }
        },

        showHelper(statusValue, listStatuses, list) {
            if (!(statusValue in listStatuses)) {
                console.log(`${statusValue}: \n \t -`)
            } else {
                console.log(`${statusValue}:`)
            }
            for (let listTask in list) {
                let listStatus = list[listTask]
                if (listStatus === statusValue) {
                    console.log(`\t - ${listTask}`)
                }
            }
        },
    },
}

toDoList.addTask('learn JS')
toDoList.addTask('learn English')
toDoList.addTask('go to sleep')
toDoList.changeStatus('go to sleep', STATUS.DONE)

toDoList.showList()
toDoList.showList(STATUS.IN_PROGRESS)