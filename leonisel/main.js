const STATUS = {
  PROGRESS: "In Progress",
  DONE: "Done",
  TODO: "To Do"
}

const list = {
	"create a new practice task": STATUS.PROGRESS, 
	"make a bed": STATUS.DONE,
	"write a post": STATUS.TODO,
}

const changeStatus = (bussines, status) => {
  list[bussines] = status;
}

const addTask = (newTask) => {
  list[newTask] = STATUS.TODO;
}

const deleteTask = (task) => {
  delete list[task];
}

const showList = () => {
  let todoStr = '';
  for(let key in list){
    if(list[key] == STATUS.TODO) {
      todoStr += `"${key}"\n    `; 
    }
  }
  if(todoStr == ''){
    todoStr = `    -`;
  }
  console.log(`Todo:\n    ${todoStr}`)

  let progressStr = '';
  for(let key in list){
    if(list[key] == STATUS.PROGRESS) {
      progressStr += `"${key}"\n    `;
      
    }
  }
  if(progressStr == '') {
    progressStr = '    -';
  }
  console.log(`In Progress:\n    ${progressStr}`)

  let doneStr = '';
  for(let key in list){
    if(list[key] == STATUS.DONE) {
      doneStr += `"${key}"\n    `;
    }
  }
  if(doneStr == '') {
    doneStr = `    -`;
  }
  console.log(`Done:\n    ${doneStr}`);
}

changeStatus("make a bed", STATUS.TODO);
changeStatus("create a new practice task", STATUS.TODO);
changeStatus("write a post", STATUS.PROGRESS);
showList();





