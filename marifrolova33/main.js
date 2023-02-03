const list = {
  "create a new practice task": "In Progress",
  "make a bed": "To Do",
  "write a post": "To Do",
};

//реализация функции add task, добавить задачу
function addTask(task) {
  list[task];
}

//функция change status, меняет статус задачи
function changeStatus(task, status) {
  list[task] = status;
}

// удаляет задачу
function deleteTask(task) {
  delete list[task];
}

let toDoCounter = 0;
let inProgressCounter = 0;
let doneCounter = 0;

function showList() {
  // реализация счетчика
  for (key in list) {
    if (list[key] === "To Do") {
      toDoCounter++; // счетчик сколько To Do в list
    }
    if (list[key] === "In Progress") {
      inProgressCounter++; // счетчик сколько In Progress в list
    }

    if (list[key] === "Done") {
      doneCounter++; // счетчик сколько In Progress в list
    }
  }

  // вывод в консоль
  for (const key in list) {
    if (list[key] === "Done") {
      console.log(`${key} : ${list[key]}`);
    }
  }

  for (const key in list) {
    if (list[key] === "To Do") {
      console.log(`${key} : ${list[key]}`);
    }
  }

  for (const key in list) {
    if (list[key] === "In Progress") {
      console.log(`${key} : ${list[key]}`);
    }
  }
  // если данного статуса нет в list
  if (doneCounter == 0) {
    console.log("Nothing is Done");
  }

  if (toDoCounter == 0) {
    console.log("Nothing is To Do");
  }

  if (inProgressCounter == 0) {
    console.log("Nothing is in Progress");
  }
}

//Проверка
//добавить новую задачу
addTask("have a walk"); // добавляет новую задачу
addTask("feed a cat");
//console.log(list);

// меняет статус задачи
// changeStatus("write a post", "In Progress");
// changeStatus("make a bed", "To Do");
// changeStatus("have a walk", "To Do");
// changeStatus("feed a cat", "Done");

// для проверки чтобы вывести Nothing для всех статусов
changeStatus("write a post", "");
changeStatus("make a bed", "");
changeStatus("write a post", "");
changeStatus("have a walk", "");
changeStatus("feed a cat", "");
changeStatus("create a new practice task", "");

// удаляет задачу
deleteTask("have a walk"); // удаляет задачу
console.log(list);

showList();
