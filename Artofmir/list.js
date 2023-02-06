const taskList = {
    
  list :{
      "Import Photos" : "Done",
      "Make a breakfast" : "Done",
      "Clean Up Room" : "In Progress",
      "Learn Cycles" : "To Do"
  },

  addTask (task, status) {
    this.list[task] = status;
  },

  deleteTask (task) {
    delete this.list[task];
  },

  changeStatus (task, newTaskStatus) {

    if (task in this.list) {

        this.list[task] = newTaskStatus;
        console.log(`New Status ${task} : ${this.list[task]}`);

      } else {

        console.log("This task is absent!");

      };
  },
  showList() {

    const todoList = {};
    const progressList = {};
    const doneList = {};

    let todoCount = 0;
    let progressCount = 0;
    let doneCount = 0;
    
    for (let key in taskList.list) {

      switch (taskList.list[key]) {

        case "To Do" :
          todoCount++;
          todoList[key] = taskList.list[key];
          break;

        case "In Progress" : 
          progressCount++;
          progressList[key] = taskList.list[key];
          break;
          
        case "Done" : 
          doneCount++;
          doneList[key] = taskList.list[key];
          break;
      };
    };

    console.log("To Do:");
      if (todoCount === 0) {          
        console.log(" - ");
      } else { 
          for (const name in todoList) {          
            console.log(name); 
          };
      };    

    console.log("In Progress:");
      if (progressCount === 0) {          
        console.log(" - ");
      } else { 
          for (const name in progressList) {          
            console.log(name); 
          };
      };

    console.log("Done:");
      if (doneCount === 0) {          
        console.log(" - ");
      } else { 
          for (const name in doneList) {          
            console.log(name); 
          };
      };
  }          
};

taskList.addTask ("Make Wishist", "To Do");    

taskList.deleteTask ("Make a breakfast"); 

taskList.addTask ("Make Apartment Renovation", "In Progress");

taskList.changeStatus ("Import Photos", "To Do"); 

taskList.showList();




