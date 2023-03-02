import { render } from './render.js'

const STATUS = { DONE: 'Done', TO_DO: 'To Do' }
const LIST = [{ name: 'Learn JS', status: STATUS.TO_DO, priority: 'high' }]

function addTask(name, priority) {
    const status = STATUS.TO_DO
    const alreadyExist = LIST.find(task => task.name === name)
    if (!name) {
        alert('Input task name')
        return
    }
    if (alreadyExist) {
        alert('This task is already in list')
        return
    }
    LIST.push({ name, status, priority })
}

function deleteTask(taskName) {
    const taskIndex = LIST.findIndex(task => task.name === taskName)
    if (taskIndex != -1) {
        LIST.splice(taskIndex, 1)
    }
}

function changeStatus(taskName) {
    const task = LIST.find(task => task.name === taskName)
    task.status = (task.status === STATUS.DONE) ? STATUS.TO_DO : STATUS.DONE
    return task.status
}

render()

export { LIST, STATUS, addTask, deleteTask, changeStatus }