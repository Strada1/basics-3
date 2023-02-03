const STATUS = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};
const ERRORS = {
  EMPTY_LIST: "Вы не можете удалить задачу, тк ее нет в вашем списке!",
  EMPTY_TASK: "Пустая задача",
  TASK_REPEAT: "Такая задача уже есть!",
};

const list = {};

function addTask(key, status) {
  if (key in list) {
    console.log(ERRORS.TASK_REPEAT);
  } else if (key == "") {
    return console.log(ERRORS.EMPTY_TASK);
  } else if (!(key in list)) {
    list[key] = status;
    console.log(`Задача '${key}' добавлена в список с статусом '${status}'`);
  }
}

function deleteTask(key) {
  if (key in list) {
    delete list[key];
    console.log(`Задача '${key}' удалена`);
  } else {
    console.log(ERRORS.EMPTY_LIST);
  }
}

function changeStatus(key, status) {
  if (key in list) {
    list[key] = status;
    console.log(`Статус задачи '${key}' был изменен на -  ${status}`);
  } else if (!(key in list)) {
    console.log(`Таска '${key}' не найдена!`);
  }
}

function showList() {
  // let sList = { ...list };
  // sList = { Todo: {}, In_Progress: {}, Done: {} };
  // sList.Todo = Object.keys(list);
  // sList.In_Progress = Object.keys(list);
  // console.log(sList); //неудачная попытка

  console.log("Todo:");
  for (const key in list) {
    if (list[key] === STATUS.TODO) {
      console.log("\t" + key);
    }
  }
  console.log("In Progress:");
  for (const key in list) {
    if (list[key] === STATUS.IN_PROGRESS) {
      console.log("\t" + key);
    }
  }
  console.log("Done:");
  for (const key in list) {
    if (list[key] === STATUS.DONE) {
      console.log("\t" + key);
    }
  }
}
addTask("do this todo", STATUS.TODO);
addTask("do this todo", STATUS.TODO);
addTask("do push ups", STATUS.TODO);
addTask("go for a walk", STATUS.TODO);
changeStatus("do this todo", STATUS.IN_PROGRESS);
addTask("make a bed", STATUS.DONE);
// deleteTask("make a bed");
addTask("eat something on breakfast", STATUS.DONE);
deleteTask("eat something on breakfast");
console.log(list);
showList();
