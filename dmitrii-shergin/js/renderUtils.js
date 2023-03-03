function createTaskItem() {
    const taskItem = document.createElement('li')
    taskItem.classList.add('task-item')
    return taskItem
}

function createDoneTask() {
    const doneTask = document.createElement('input')
    doneTask.classList.add('done')
    doneTask.setAttribute('type', 'checkbox')
    return doneTask
}

function createTaskDesc(name) {
    const taskDesc = document.createElement('span')
    taskDesc.classList.add('task')
    taskDesc.textContent = name
    return taskDesc
}

function createDeleteBtn() {
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('btn', 'delete')
    deleteBtn.textContent = `\u00D7`
    return deleteBtn
}

export { createTaskItem, createDoneTask, createTaskDesc, createDeleteBtn }