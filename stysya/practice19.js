const statusList = ["In Progress",  "Done", "To do"]
const plan = {
    list:{
      "create new practice task": "In Progress",
      "add new task in list": "Done",
      "change status task": "To do",
      "resultConsole": "Done"
  }, 
  
  changeStatus(name, status) {
      this.list[name] = status;
  },
  showList() {
    for (const key in this.list) {
        console.log('"' + key + '": ' + this.list[key]);
    }

    const vals = Object.values(this.list)
    for (const status in statusList) {
        if (vals.indexOf(statusList[status]) === -1) {
            console.log("No such status ", statusList[status])
        }
    }
  }
  }
  plan.changeStatus("add new task in list", "In Progress");
  plan.changeStatus("change status task", "Done");

  console.log(plan);
  plan.showList()
