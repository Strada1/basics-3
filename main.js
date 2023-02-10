const list = [
    { name: "create a post", status: "In progress", priority: "low" },
    { name: "test", status: "To Do", priority: "high" },
    { name: "chafng", status: "To Do", priority: "med" },
    { name: "changfsad", status: "To Do", priority: "med" },
    { name: "safchang", status: "To Do", priority: "med" },
  ];
  
  const todoList = {
    list,
    addTask(task) {
      this.list.push({ name: task, status: "To Do", priority: "high" });
    },
    deleteTask(task) {
      let s = this.list.findIndex((number) => number["name"] == task);
      this.list.splice(s, 1);
    },
    changeStatus(task, status1) {
      let x = this.list.findIndex((number) => number["name"] == task);
      this.list[x] = { name: task, status: status1 };
    },
    showList(status1) {
      let x = this.list.filter((number) => number["status"] == status1);
      console.log(`${status1}: `);
      for (let i = 0; i < x.length; i++) {
        console.log(`\t${x[i]["name"]}`);
      }
      if (x.length < 1) {
        console.log(`\t-`);
      }
    },
  };
  
  function fastShowList() {
    todoList.showList("In progress");
    todoList.showList("Done");
    todoList.showList("To Do");
  }
  
  fastShowList();