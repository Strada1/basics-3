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
      todoStr += `\n    "${key}"`; 
    }
  }
  if(todoStr == ''){
    todoStr = `\n    -`;
  }
  console.log(`Todo:${todoStr}`)

  let progressStr = '';
  for(let key in list){
    if(list[key] == STATUS.PROGRESS) {
      progressStr += `\n    "${key}"`;
      
    }
  }
  if(progressStr == '') {
    progressStr = '\n    -';
  }
  console.log(`In Progress:${progressStr}`)

  let doneStr = '';
  for(let key in list){
    if(list[key] == STATUS.DONE) {
      doneStr += `\n    "${key}"`;
    }
  }
  if(doneStr == '') {
    doneStr = `\n    -`;
  }
  console.log(`Done:${doneStr}`);
}

changeStatus("make a bed", STATUS.TODO);
changeStatus("create a new practice task", STATUS.TODO);
changeStatus("write a post", STATUS.PROGRESS);
showList();





