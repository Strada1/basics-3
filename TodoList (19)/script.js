const statuses = {
  toDo: "To Do",
  done: "Done",
  inProgress: "In Progress",
};

const list = {
  tasks: {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
  },
  add(task) {
    this.tasks[task] = "To Do";
  },
  log() {
    console.table(this.tasks);
  },
};

function changeStatus(task, status) {
  if (task in list.tasks == true) {
    for (let key in list.tasks) {
      if (key == task) {
        list.tasks[key] = status;
      } else {
      }
    }
  } else {
    alert("Can't find such task!");
  }
}

function addTask(task) {
  list.add(task);
}

function deleteTask(taskToDelete) {
  if (taskToDelete in list.tasks == true) {
    delete list.tasks[taskToDelete];
  } else alert("Can't find such task!");
}

function showList() {
  let toDo = "To do:";
  let inProgress = "In Progress:";
  let done = "Done:";
  for (let key in list.tasks) {
    if (list.tasks[key] == statuses.toDo) {
      toDo += `\n     ${key}`;
    }
    if (list.tasks[key] == statuses.done) {
      done += `\n     ${key}`;
    }
    if (list.tasks[key] == statuses.inProgress) {
      inProgress += `\n     ${key}`;
    }
  }
  console.log(toDo);
  console.log(inProgress);
  console.log(done);
}

showList();
changeStatus("make a bed", statuses.inProgress);
addTask("become a software developer");
changeStatus("become a software developer", statuses.inProgress);
addTask("visit France");
addTask("find a wife");
changeStatus("find a wife", statuses.done);
deleteTask("create a new practice task");
list.log();
showList();
