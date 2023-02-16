// const STATUS = {
//   PROGRESS: "In Progress",
//   DONE: "Done",
//   TODO: "To Do"
// }

// const list = {
// 	"create a new practice task": STATUS.PROGRESS, 
// 	"make a bed": STATUS.DONE,
// 	"write a post": STATUS.TODO,
// }

// const changeStatus = (bussines, status) => {
//   list[bussines] = status;
// }

// const addTask = (newTask) => {
//   list[newTask] = STATUS.TODO;
// }

// const deleteTask = (task) => {
//   delete list[task];
// }

// const showList = () => {
//   let todoStr = '';
//   for(let key in list){
//     if(list[key] == STATUS.TODO) {
//       todoStr += `\n    "${key}"`; 
//     }
//   }
//   if(todoStr == ''){
//     todoStr = `\n    -`;
//   }
//   console.log(`Todo:${todoStr}`)

//   let progressStr = '';
//   for(let key in list){
//     if(list[key] == STATUS.PROGRESS) {
//       progressStr += `\n    "${key}"`;
      
//     }
//   }
//   if(progressStr == '') {
//     progressStr = '\n    -';
//   }
//   console.log(`In Progress:${progressStr}`)

//   let doneStr = '';
//   for(let key in list){
//     if(list[key] == STATUS.DONE) {
//       doneStr += `\n    "${key}"`;
//     }
//   }
//   if(doneStr == '') {
//     doneStr = `\n    -`;
//   }
//   console.log(`Done:${doneStr}`);
// }

// changeStatus("make a bed", STATUS.TODO);
// changeStatus("create a new practice task", STATUS.TODO);
// changeStatus("write a post", STATUS.PROGRESS);
// showList();

const STATUS = {
  PROGRESS: 'In Progress',
  DONE: 'Done',
  TODO: 'To Do'
}

const PRIORITY = {
  LOW: 'low',
  HIGH: 'high'
}

const list = [
 {name: 'check habit tracker', status: 'To Do', priority: 'low'},
 {name: 'review students code', status: 'In Progress', priority: 'high'},
 {name: 'make the bed', status: 'Done', priority: 'low'}
]

const addTask = (taskName, userStatus = STATUS.TODO, userPriority = PRIORITY.LOW) => {
  let template = {};
  if(taskName) {
    template.name = taskName;
    template.status = userStatus;
    template.priority = userPriority;
    list.push(template);
  }
}

const changeStatusPriority = (task, newStatus, newPriority) => {
  list.forEach(elem => {
    if(elem.name === task) {
      if(newStatus){
        elem.status = newStatus;
      }
      if(newPriority){
        elem.priority = newPriority;
      }
    }
  })
}

const changeTaskName = (changedName, newName) => {
  list.forEach(elem => {
    if(elem.name === changedName && newName) {
        elem.name = newName;
    }
  })
}

const deleteTask = (task) => {
  list.forEach(elem => {
    if(elem.name === task) {
      const position= list.indexOf(elem);
      list.splice(position, 1);
    } 
  })
}

// const showList = () => {
//   let todoStr = '';
//   list.forEach(elem => {
//     if(elem.status === STATUS.TODO){
//       todoStr += `\n    '${elem.name}'`;
//     }
//   })
//   if(todoStr === '') {
//     todoStr = `\n    -`;
//   }
//   console.log(`ToDo:${todoStr}`);

//   let progressStr = '';
//   list.forEach(elem => {
//     if(elem.status === STATUS.PROGRESS){
//       progressStr += `\n    '${elem.name}'`;
//     }
//   })
//   if(progressStr === '') {
//     progressStr = `\n    -`;
//   }
//   console.log(`In Progress:${progressStr}`);

//   let doneStr = '';
//   list.forEach(elem => {
//     if(elem.status === STATUS.DONE){
//       doneStr += `\n    '${elem.name}'`;
//     }
//   })
//   if(doneStr === '') {
//     doneStr = `\n    -`;
//   }
//   console.log(`Done:${doneStr}`);
// }

const showListByStatus = () => {
  let todoStr = '';
  let progressStr = '';
  let doneStr = '';
  
  list.forEach(elem => {
    const strTemplate = `\n    '${elem.name}'`
    
    switch(elem.status) {
      case STATUS.TODO:
        todoStr += strTemplate;
        break;
      case STATUS.PROGRESS:
        progressStr += strTemplate;
        break;
      case STATUS.DONE:``
        doneStr += strTemplate;
        break;  
    }
  })

  const emptyStrTemplate = `\n    -`;
  if(!todoStr) todoStr = emptyStrTemplate;
  if(!progressStr) progressStr = emptyStrTemplate;
  if(!doneStr) doneStr = emptyStrTemplate;

  console.log(`ToDo:${todoStr}\nIn Progress:${progressStr}\nDone:${doneStr}`);
}

const showListByPriority = () => {
  let lowStr = '';
  let highStr = '';
  
  list.forEach(elem => {
    const strTemplate = `\n    '${elem.name}'`
    
    switch(elem.priority) {
      case PRIORITY.LOW:
        lowStr += strTemplate;
        break;
      case PRIORITY.HIGH:
        highStr += strTemplate;
        break; 
    }
  })

  const emptyStrTemplate = `\n    -`;
  if(!lowStr) lowStr = emptyStrTemplate;
  if(!highStr) highStr = emptyStrTemplate;

  console.log(`Low:${lowStr}\nHigh:${highStr}`);
}

addTask('make salad', STATUS.PROGRESS, PRIORITY.HIGH);
changeStatusPriority(list[0].name, STATUS.DONE, PRIORITY.HIGH);
changeTaskName(list[1].name, 'review students homework');
deleteTask(list[2].name);
showListByStatus();
showListByPriority();
// console.log(list);
