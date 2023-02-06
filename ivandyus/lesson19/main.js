const toDo = {

  list: {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "pet the cat": "Done",
    "write a post": "To Do",
  },
  /* addTask(task, info) {
     this.list[task] = info;
   },
   changeStatus(task, status) {
     this.list[task] = status;
   },
   deleteTask(task) {
     delete this.list[task];
   },*/


  showList() {
    let countToDo = 0;
    let countDone = 0;
    let countInProgress = 0;
    for (const task in toDo.list) {
      if (toDo.list[task] === "To Do") {
        console.log(`${toDo.list[task]} : "${task}"`);
        countToDo++;
      } else if (toDo.list[task] === "Done") {
        console.log(`${toDo.list[task]} : "${task}"`);
        countDone++;
      } else if (toDo.list[task] === "In Progress") {
        console.log(`${toDo.list[task]} : "${task}"`);
        countInProgress++;
      }
    };

    if (countDone === 0) {
      console.log("Nothing is Done");
    } else if (countToDo === 0) {
      console.log("Nothing is To Do");
    } else if (countInProgress === 0) {
      console.log("Nothing In Progress");
    }

  }
};

//toDo.addTask('have a walk', "To Do");
//console.log(toDo.list['have a walk']);
//toDo.changeStatus("write a post", "Done");
//toDo.deleteTask("make a bed");
toDo.showList();

