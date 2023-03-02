import { addTask, deleteTask, changeStatus, STATUS } from './main.js'
import { render } from './render.js'

function addTaskNode(event) {
    event.preventDefault()
    const name = this.add.value
    const priority = this.name
    this.add.value = ''
    addTask(name, priority)
    render()
}

function deleteTaskNode() {
    const taskName = this.parentNode.querySelector('.task').textContent
    deleteTask(taskName)
    render()
}

function changeStatusNode() {
    const taskNode = this.parentNode.querySelector('.task')
    const taskName = taskNode.textContent
    const status = changeStatus(taskName)
    if (status === STATUS.TO_DO) {
        taskNode.classList.remove('doneTask')
        this.parentNode.classList.remove('doneDiv')
    } else if (status === STATUS.DONE) {
        taskNode.classList.add('doneTask')
        this.parentNode.classList.add('doneDiv')
    }
}

export { addTaskNode, deleteTaskNode, changeStatusNode }