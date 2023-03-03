import { LIST } from "./main.js"
import { addTaskNode, changeStatusNode, deleteTaskNode } from "./mainNodes.js"
import * as util from './renderUtils.js'

const TASK_LISTS = document.getElementsByClassName('task-list')

for (let form of document.forms) {
    form.addEventListener('submit', addTaskNode)
}

function render() {
    deleteList()
    for (let task of LIST) {
        const taskList = Array.of(...TASK_LISTS).find(elem => elem.classList.contains(task.priority))
        const taskItem = util.createTaskItem()
        const doneTask = util.createDoneTask()
        const taskDesc = util.createTaskDesc(task.name)
        const deleteBtn = util.createDeleteBtn()

        taskItem.append(doneTask, taskDesc, deleteBtn)
        taskList.append(taskItem)

        doneTask.addEventListener('click', changeStatusNode)
        deleteBtn.addEventListener('click', deleteTaskNode)
    }
}

function deleteList() {
    for (let taskList of TASK_LISTS) {
        taskList.innerHTML = ''
    }
}

export { render }