const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
  "write a post": "To Do",
};

const StatusInProgress = "In Progress";
const StatusDone = "Done";
const StatusToDo = "To Do";
const StatusList = [StatusInProgress, StatusDone, StatusToDo];

function changeStatus(task, status = StatusToDo) {
  for (let key in list) {
    if (key == task) {
      list[key] = status;
    } else {
      addTask(task);
    }
  }
}

function addTask(task, status = StatusToDo) {
  list[task] = status;
}

function deleteTask(task) {
  let result = false;
  for (let key in list) {
    if (key == task) {
      delete list[key];
      result = true;
    }
  }
  if (result == false) {
    console.log("there is nothing to delete");
  }
}

function showList() {
  let listToDo = {};
  let listDone = {};
  let listInProgress = {};
  for (let key in list) {
    if (list[key] == StatusToDo) {
      listToDo[key] = StatusToDo;
    } else if (list[key] == StatusDone) {
      listDone[key] = StatusDone;
    } else {
      listInProgress[key] = StatusInProgress;
    }
  }

  function showNewFormat(statusTasks) {
    function isEmpty(obj) {
      for (let key in obj) {
        return false;
      }
      return true;
    }

    if (isEmpty(statusTasks)) {
      console.log("    -");
    } else {
      for (let key in statusTasks) {
        console.log(`    ${key}`);
      }
    }
  }

  console.log("ToDo: ");
  showNewFormat(listToDo);
  console.log("In Progress: ");
  showNewFormat(listInProgress);
  console.log("Done: ");
  showNewFormat(listDone);
}

changeStatus("write a post", "Done"); // меняет статус задачи
addTask("have a walk"); // добавляет новую задачу
addTask("Eat 2 bugs"); // добавляет новую задачу
addTask("Eat 15 bugs"); // добавляет новую задачу
addTask("Eat 126 bugs"); // добавляет новую задачу
deleteTask("have a walk"); // удаляет задачу
deleteTask("Eat 126 bugs");
deleteTask("create a new practice task");
changeStatus("create a new practice task", "Done");
addTask("EBASHIT'");
changeStatus("EBASHIT'", StatusInProgress);
showList();
