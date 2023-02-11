const list = [
  { name: "test0", status: "In progress", priority: "low" },
  { name: "test1", status: "Done", priority: "high" },
  { name: "test2", status: "In progress", priority: "low" },
  { name: "test3", status: "To Do", priority: "high" },
  { name: "test4", status: "In progress", priority: "low" },
  { name: "test5", status: "Done", priority: "high" },
  { name: "test6", status: "To Do", priority: "high" },
];

//Функция добавления задачи
function addTask(newObj) {
  list.push(newObj);
}

//Функция удаления задачи
function deleteTask(delObj) {
  list.splice(0, delObj);
}

//Функция изменения статуса задачи
function changeTask(id, status) {
  list.splice(id, 1, status);
}

// Вывод в консоль задач в порядке статуса
function showTaskStatus() {
  const taskSearchToDo = list.filter((name) => name.status === "To Do");
  console.log(taskSearchToDo);
  const taskSearchInProgress = list.filter(
    (name) => name.status === "In progress"
  );
  console.log(taskSearchInProgress);
  const taskSearchDone = list.filter((name) => name.status === "Done");
  console.log(taskSearchDone);
}
// Вывод в консоль задач в порядке приоритета
function showTaskPriority() {
  const taskSearchLow = list.filter((name) => name.priority === "low");
  console.log(taskSearchLow);
  const taskSearchHight = list.filter((name) => name.priority === "high");
  console.log(taskSearchHight);
}

changeTask(3, { name: "test3", status: "In progress", priority: "high" });
deleteTask(2);
addTask({ name: "test7", status: "To Do", priority: "high" });
showTaskStatus();
