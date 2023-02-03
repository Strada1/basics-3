const toDo = {
  list: {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "pet the cat": "Done",
    "write a post": "To Do",
  },
  addTask(task, info) {
    this.list[task] = info;
  },
  changeStatus(task, status) {
    this.list[task] = status;
  },
  deleteTask(task) {
    delete this.list[task];
  },
  showList() {
    for (const task in toDo.list) {
      if (toDo.list[task] == "To Do") {
      console.log(`${toDo.list[task]} : "${task}"`);
      } else if (toDo.list[task]  == "Done") {
        console.log(`${toDo.list[task]} : "${task}"`);
      } else if (toDo.list[task]  == "In Progress") {
        console.log(`${toDo.list[task]} : "${task}"`);
      }
    };
  }
};

//toDo.addTask('have a walk', "To Do");
//console.log(toDo.list['have a walk']);
//toDo.changeStatus("write a post", "Done");
toDo.deleteTask("make a bed");
toDo.showList();

