const ToDolist = {
 list: {
  "Create a new practice task": "In Progress",
  "Make a bed": "Done",
  "Write a post": "To Do",
 },

 changeStatus(task, status) {
  this.list[task] = status
 },

 addTask(task) {
  this.list[task] = 'To Do'
 },

 deleteTask(task) {
  delete this.list[task]
 },

 showList() {
  const clone1 = {}
  const clone2 = {}
  const clone3 = {}
  for (const task in this.list) {
   if (this.list[task] === "To Do") {
    clone1[task] = this.list[task]

   } else if (this.list[task] === "In Progress") {
    clone2[task] = this.list[task]

   } else if (this.list[task] === "Done") {
    clone3[task] = this.list[task]

   }
  }

 //  function showMessage(clones) {
 //   switch (clones) {

 //    case clone1:
 //     clones = clone1
 //     clone1.name = "To Do"
 //     break;

 //    case clone2:
 //     clones = clone2
 //     clone2.name = "In Progress"
 //     break;

 //    default:
 //     clones = clone3
 //     clone3.name = "Done"
 //     break;
 //   }

 //  let item = 0
 //  for (const task in clones) {
 // let  a = clones.name
 //   delete clones.name;
 //   if (task in clones) {
 //    item++
 //    while (item-- > 0) {
 //     console.log(task + ': ' + clones[task]); break
 //    }
 //   } else {
 //    console.log("Nothing is " + a);
 //   }
 //  }


  function showMessage(clones) {
   switch (clones) {

    case clone1:
     clone1.name = "To Do:"
     console.log(clone1.name);
     break;

    case clone2:
     clone2.name = "In Progress:"
     console.log(clone2.name);
     break;

    default:
     clone3.name = "Done:"
     console.log(clone3.name);
     break;
   }


   let item = 0
   for (const task in clones) {
    delete clones.name;
    if (task in clones) {
     item++
     while (item-- > 0) {
      console.log(task); break
     }
    } else {
     console.log("-");
    }
   }
  }

  showMessage(clone1)
  showMessage(clone2)
  showMessage(clone3)
  
 }
};

ToDolist.changeStatus("Write a post", "Done")
ToDolist.changeStatus("Understant Java Script", "To Do")
ToDolist.changeStatus("Make a bed", "To Do")
ToDolist.addTask("Have a walk");
ToDolist.deleteTask("Write a post");
ToDolist.showList()


