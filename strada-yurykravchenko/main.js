const buttonAddTask = document.querySelector(".button__add-task")
const fieldAddTask = document.querySelector(".field__add-task") //поле ввода задачи
let highTasks = document.querySelector(".tasks-high__wrapper") //список срочных задач
let lowTasks = document.querySelector(".tasks-low__wrapper") //список не срочных задач
let task = document.querySelector(".task-wrapper")

function createTask() {
    const templateTask = document.querySelector(".template-task").content //находим нужный фрагмент
    let textTask = templateTask.querySelector("p") //
    let dataInputTask = fieldAddTask.value //получаем значение из инпута
    textTask.textContent = dataInputTask //меняем текстовый контент в нужном элементе с помощью значения из поля ввода
    let element = templateTask.cloneNode(true) //клонируем элемент с изменениями
    let priority = prompt("Введите преоритет задачи")
    if (priority === "high") {
        highTasks.appendChild(element)
    } else {
        lowTasks.appendChild(element)
    }
}

buttonAddTask.addEventListener("click", (event) => {
    event.preventDefault()
    createTask()
    fieldAddTask.value = ""
})
