const TASK_LISTS = document.getElementsByClassName('task-list')         // ul: high, medium, low
const LIST = [{ name: 'Learn JS', status: 'toDo', priority: 'high' }]
for (form of document.forms) {
    form.addEventListener('submit', addTask)
}

function render() {
    deleteList()
    for (let task of LIST) {
        const taskItem = document.createElement('li')
        const doneTask = document.createElement('input')
        const taskDesc = document.createElement('span')
        const deleteBtn = document.createElement('button')

        taskItem.classList.add('task-item')
        doneTask.classList.add('done')
        doneTask.setAttribute('type', 'checkbox')
        taskDesc.classList.add('task')
        taskDesc.textContent = task.name
        deleteBtn.classList.add('btn', 'delete')
        deleteBtn.textContent = `\u00D7`

        taskItem.append(doneTask, taskDesc, deleteBtn)
        const taskList = Array.of(...TASK_LISTS).find(elem => elem.classList.contains(task.priority))
        taskList.append(taskItem)

        deleteBtn.addEventListener('click', deleteTask)
        doneTask.addEventListener('click', changeStatus)
    }
}
function deleteList() {
    for (let taskList of TASK_LISTS) {
        taskList.innerHTML = ''
    }
}

function addTask(event) {
    event.preventDefault()
    const name = this.add.value
    const status = 'toDo'
    const priority = this.name
    this.add.value = ''
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
    render()
}
function deleteTask() {
    const taskName = this.parentNode.querySelector('.task').textContent
    const taskIndex = LIST.findIndex(task => task.name === taskName)
    if (taskIndex != -1) {
        LIST.splice(taskIndex, 1)
    }
    render()
}
function changeStatus() {
    const taskNode = this.parentNode.querySelector('.task')
    const taskName = taskNode.textContent
    const task = LIST.find(task => task.name === taskName)
    if (task.status === 'Done') {
        task.status = 'toDo'
        taskNode.classList.remove('doneTask')
        this.parentNode.classList.remove('doneDiv')
    } else if (task.status === 'toDo') {
        task.status = 'Done'
        taskNode.classList.add('doneTask')
        this.parentNode.classList.add('doneDiv')
    }
}
render()