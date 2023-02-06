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

    const loggingList = {
      "To Do" : todoList,
      "In Progress" : progressList,
      "Done" : doneList
    };

    for (const key in loggingList) {

        for (const name in taskList.list) {

          let count = 0;
          if (key === taskList.list[name]) {
            count++;
            loggingList[key] = taskList.list[name];
          } else {
          };
        };

        console.log(`${key}:`);

        if (count === 0) {    
          console.log(" - ");
        } else {
          for (const name in loggingList[key]) { 
          console.log(name); 
        };
        };
    };
  }          
};

taskList.addTask ("Make Wishist", "To Do");    

taskList.deleteTask ("Make a breakfast"); 

taskList.addTask ("Make Apartment Renovation", "In Progress");

taskList.changeStatus ("Import Photos", "To Do"); 

taskList.showList();



