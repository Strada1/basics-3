let toDoList = [];
const newTask = function (task) {
    toDoList.unshift(task);
}

const deleteTask = function (task) {
    const index = toDoList.indexOf(task);
    if (index !== -1) {
        toDoList.splice(index, 1);
    }
}

newTask("Прогуляться");
newTask("Приготовить еду");
deleteTask("Заправить кровать");

for (task of toDoList) {
    console.log(task);
}
