//19 Практика ToDo

const ToDo = {
    list: {
    "create a new practice task": "In Progress", 
	"make a bed": "Done", 
	"write a post": "To Do",
},

//changeStatus("write a post", "Done") меняет статус задачи
changeStatus (task, status) {
    if (task in this.list) {
      this.list[task] = status;
    } else {
      console.log ('Задача не найдена');
    }
  },

// addTask('have a walk') добавляет новую задачу
addTask (task, status) {
    if (!(task in this.list)) {
      this.list[task] = status;
    } else  {
      console.log('Эта задача присутствует в списке дел');
    }
  },

//deleteTask('have a walk') удаляет задачу
deleteTask (task) {
    if (task in this.list) {
      delete this.list[task];
    } else {
      console.log('Задача отсутствует в списке дел');
    }
  },

  //showList() показывает список всех задач
  showList() {
    for (const task in ToDo.list) {
        //console.log('"' + task + '"' + ': '+ this.list[task])
        console.log(`"${task}": ${this.list[task]}`)
    }
    console.log(`Nothing is Done1\n`)
},

showListRevet() {
    let last_value = ''
    sorted_by_value_object = Object.keys(ToDo.list).sort().reduce((accumulator, key) => {
        accumulator[key] = ToDo.list[key];
        return accumulator;
      }, {})

    for (const task in sorted_by_value_object) {
        if (last_value.length == 0 || this.list[task] != last_value){
            console.log(`${this.list[task]}:`)
            last_value = this.list[task]
        }
        console.log(`\t"${task}"`)
    }
    console.log(`Nothing is Done2\n`)
},
}

ToDo.changeStatus("make a bed", "In Progress")
ToDo.addTask("read book", "Done")
ToDo.deleteTask("write a post")
ToDo.showList()
ToDo.showListRevet()










  