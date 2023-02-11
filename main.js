let toDoList = [];
const addTask = function (task) {
    toDoList.unshift(task);
}
const deleteTask = function (task) {
    const index = toDoList.indexOf(task);
    if (index !== -1) {
        toDoList.splice(index, 1);
    }
}
addask("Прогуляться");
addTask("Приготовить еду");
deleteTask("Заправить кровать");
for (task of toDoList) {
    console.log(task);
}
