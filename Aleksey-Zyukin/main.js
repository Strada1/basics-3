const STATUS = {
  "To Do": "To Do",
  "Done": "Done",
  "In Progress": "In Progress"
}

const list = {
  "create a new practice task": "In Progress", 
  "make a bed": "Done",
  "write a post": "To Do"
}

function changeStatus(task, status){
  if(!(task in list)){
      return console.log("Такой задачи нет в списке");
  }
  if(!(status in STATUS)){
      return console.log('Вы ввели неверный статус, доступные статусы: "To Do", "Done", "In Progress"');
  }
  const lastStatus = list[task];
  list[task] = status;
  console.log(`Статус задачи "${task}" был изменен с "${lastStatus}" на "${status}"`);
}

function addTask(task){
  if(task in list){
      console.log("Такая задача уже есть");
  }
  if(task === "" || task === undefined){
      console.log("Вы не ввели задачу");
  }
  list[task] = "To Do";
  console.log(`Задача "${task}" была успешно добавлена в список`);
}

function deleteTask(task){
  if(!(task in list)){
      return console.log("Такой задачи нет в списке");
  }
  if(task === "" || task === undefined){
      return console.log("Вы не ввели задачу");
  }
  delete list[task];
  console.log(`Задача "${task}" была успешно удалена из списка`);
}

function showStatus(status){
    if(!(status in STATUS)){
        return console.log('Вы ввели неверный статус, доступные статусы: "To Do", "Done", "In Progress"');
    }
    flag = false;
    let text = `${status}: \n`;
    for(key in list){
        if(list[key] === status){
            text += `\t ${key} \n`;
            flag = true;
        }
    }
    if(!flag){
        text += '\t - \n';
    }
    console.log(text);
}
function showList(){
  showStatus("To Do");
  showStatus("Done");
  showStatus("In Progress");
}

changeStatus("create a new practice task", "To Do")
addTask("take over the world");
deleteTask("make a bed");
showList();

  
