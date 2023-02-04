const list = {
  "create a new practice task": "In Progress",
  "make a bed": "To Do",
  "write a post": "In Progress",
};

const inProgress = "In Progress";
const toDo = "To Do";
const done = "Done";

function addTask(task, status) {
  list[task] = status; {
    if ((status === inProgress ||
    status === toDo ||
    status === done) &&
    (task !== list[task]))
     {
      console.log(task + " : " + list[task])
    } else {
      console.log("This task alredy in the list")
    }
  }
}

function shangeStatus(task, status) {
  list[task] = status; {
    if (status === inProgress ||
    status === toDo ||
    status === done) 
     {
      console.log("Status is change")
    }  else  {
      console.log("Wrong status")
    }
  }
}

function deleteTask(task) {
  delete list[task]; {
    console.log("Task was deleted")
  }
}

function showList() {
  console.log ("To Do:");
  for (const task in list) {
    if (list[task] === toDo) {
      console.log ("\t" + task)
    };
  };
  console.log ("In Progress:");
  for (const task in list) {
    if (list[task] === inProgress) {
      console.log ("\t" + task)
    };
  };
  console.log ("Done");
  for (const task in list) {
    if (list[task] === done) {
      console.log("\t" + task)
    } else if (list[task] !== done) {
      console.log("Nothing is Done")   // Здесь пытался выводить только одно сообщение "Nothing is done" в консоль, но так и не понял как это сделать
    };
  };
}

//shangeStatus("Make a bed", "Done")
//shangeStatus("write a post", "In Progrss")
//addTask("Go to the gum", "In Progress")
//deleteTask("make a bed")
showList()