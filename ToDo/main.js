const ToDo = {
  list: {
    'get up on bed': 'Done',
    'make a Strada': 'Is Progress',
    'make a Codewars': 'unDone',
    'make a homework': 'unDone',
    'go to sleep': 'unDone',
  },
  addTask(name, status = 'unDone') {
    this.list[name] = status
  },
  changeStatus(name, status) {
    this.list[`${name}`] = status
  },
  deleteTask(name) {
    delete this.list[name]
  },
  showTask() {
    let letter = 'Is Progress: '
    let string = 'unDone: '
    let str = 'Done: '
    for (const key in ToDo.list) {
      if (this.list[key] === 'Done') {
        str += ` 
        ${key}
        `
      } else if (this.list[key] === 'unDone') {
        string += `
        ${key}
        `
      } else if (this.list[key] == 'Is Progress') {
        letter += `
          ${key}
          `
      } else {
        console.log(key + ' ' + 'This not what I want.')
      }
    }
    const result = `
    ${str}  
    ${string} 
    ${letter}`
    console.log(result)
  },
}

ToDo.addTask('training')
ToDo.deleteTask('go to sleep')
ToDo.changeStatus('make a Strada', 'Is Progress')
ToDo.showTask()
