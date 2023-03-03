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
    const name = this.parentNode.querySelector('.task').textContent
    deleteTask(name)
    render()
}

function changeStatusNode() {
    const taskNode = this.parentNode.querySelector('.task')
    const name = taskNode.textContent
    changeStatus(name)
    if (this.checked) {
        taskNode.classList.add('doneTask')
        this.parentNode.classList.add('doneDiv')
    } else {
        taskNode.classList.remove('doneTask')
        this.parentNode.classList.remove('doneDiv')
    }
}

export { addTaskNode, deleteTaskNode, changeStatusNode }