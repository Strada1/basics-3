const toDo = {
  list: {
    'write a book': 'paused',
    'drink a cofe': 'Done',
    'hard write code': 'do',
  },
  changeStatus(whoReplace, replace) {
    this.list[whoReplace] = replace
  },
  addTask(whoTask, task) {
    this.list[whoTask] = task
  },
  deleteTask(whoDelete) {
   delete this.list[whoDelete] 
  },
  showList() {
    console.log(this.list)
  }
}
toDo.changeStatus('write a book', 'Done')
toDo.addTask('hard write code', 'start')
toDo.deleteTask('drink a cofe')
toDo.showList()