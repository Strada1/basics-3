function changeStatus(key, status){
  if(!(key in list)){
    console.log("Такой задачи нет в списке")
  }
  if(!(status === "To Do" || status === "Done" || status === "In Progress")){
      console.log('Вы ввели неверный статус, доступные статусы: "To Do", "Done", "In Progress"');
  }
  const lastStatus = list[key];
  list[key] = status;
  console.log(`Статус для "${key}" был изменен с "${lastStatus}" на "${status}"`);
}
function addTask(key){
  if(key in list){
    if(key === "" || key === undefined){
      console.log("Вы не ввели задачку");
    }
    else{
      list[key] = "To Do";
      console.log(`Задача "${key}" была успешно добавлена в список`);
    }
    console.log("Такая задачка уже есть");
  }
  else{
    console.log("Такая задачка уже есть");
  }
}
function deleteTask(key){
  if(key in list){
    if(key === "" || key === undefined){
      console.log("Вы не ввели задачку для удаления");
    }
    else{
      delete list[key];
      console.log(`Задача "${key}" была успешно удалена из списка`);
    }
  }
  else{
    console.log("Такой задачи нет в списке")
  }
}
function showList(){
  let text = "", 
  todo = "Todo: \n" ,
  progress = "Progress: \n",
  done = "Done: \n",
  todoFlag = true,
  progressFlag = true,
  doneFlag = true;
  for(key in list){
    switch(list[key]){
      case "To Do":
        todo += `\t ${key} \n`;
        todoFlag = false;
        break;
      case "In Progress":
        progress += `\t ${key} \n`;
        progressFlag = false;
        break;
      case "Done":
        done += `\t ${key} \n`;
        doneFlag = false;
        break;
    }
  }
  if(todoFlag){
    todo += '\t - \n';
  }
  if(progressFlag){
    progress += '\t - \n';
  }
  if(doneFlag){
    done += '\t - \n';
  }
  text = todo + progress + done;
  console.log(text);
}
const list = {
	"create a new practice task": "In Progress", 
	"make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
	"write a post": "To Do",
}
changeStatus("write a post", "Done") // меняет статус задачи
addTask("learn PHP"); // добавляет новую задачу
deleteTask("learn PHP"); // удаляет задачу
showList(); // показывает список всех задач
