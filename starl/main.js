const toDo = {
  list: {
    'write a book': 'todo',
    'drink a cofe': 'done',
    'hard write code': 'in progress',
  },
  checkStatus() {
    console.log('Todo:')
    for (let key in this.list) {
      if (toDo.list[key] == 'todo') {
        console.log(`    ${key}`)
      }
    }
    console.log('In Progress:')
    for (let key in this.list) {
      if (toDo.list[key] == 'in progress') {
        console.log(`    ${key}`)
      }
    }
    console.log('Done:')
    for (let key in this.list) {
      if (toDo.list[key] == 'done') {
        console.log(`    ${key}`)
      }
    }
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
}

toDo.changeStatus('write a book', 'in progress')
toDo.addTask('go to sleep', 'todo')
toDo.deleteTask('drink a cofe')
toDo.checkStatus()