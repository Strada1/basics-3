const ToDo = {
  list: {
      "create a new practice task": "In Progress",
      "make a bed": "Done",
      "write a post": "ToDo",
  },
  changeStatus: function(key, status) {
    if (key in ToDo.list) {
      this.list[key] = status
    } else {
      console.log('No1')
    }
  },
  addTask: function (key, status) {
    if (!(key in ToDo.list)) {
      this.list[key] = status
    } else  {
      console.log("No2")
    }
  },
  deleteTask: function (key) {
    if (key in this.list) {
      delete this.list[key] 
    } else {
      console.log("No3")
    }
  },
  showList: function () {
    for (const key in ToDo.list) {
      console.log(key, this.list[key])
    }
  }
}
ToDo.changeStatus("create a new practice task", "ToDo")
ToDo.addTask("read book", "already")
ToDo.deleteTask("write a post")
ToDo.showList()





