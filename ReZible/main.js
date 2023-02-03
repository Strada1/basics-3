function changeStatus(key, status){
  if(key in list){
    if(status === "To Do" || status === "Done" || status === "In Progress")
    {
      const lastStatus = list[key];
      list[key] = status;
      console.log(`Статус для "${key}" был изменен с "${lastStatus}" на "${status}"`);
    }
    else{
      console.log('Вы ввели неверный статус, доступные статусы: "To Do", "Done", "In Progress"');
    }
  }
  else{
    console.log("Такой задачи нет в списке")
  }
}
function addTask(key){
  if(!(key in list)){
    if(key === "" || key === undefined){
      console.log("Вы не ввели задачку");
    }
    else{
      list[key] = "To Do";
      console.log(`Задача "${key}" была успешно добавлена в список`);
    }
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
  Todo = "Todo: \n" ,
  Progress = "Progress: \n",
  Done = "Done: \n",
  TodoFlag = true,
  ProgressFlag = true,
  DoneFlag = true;
  for(key in list){
    switch(list[key]){
      case "To Do":
        Todo += `\t ${key} \n`;
        TodoFlag = false;
        break;
      case "In Progress":
        Progress += `\t ${key} \n`;
        ProgressFlag = false;
        break;
      case "Done":
        Done += `\t ${key} \n`;
        DoneFlag = false;
        break;
    }
  }
  if(TodoFlag){
    Todo += '\t - \n';
  }
  if(ProgressFlag){
    Progress += '\t - \n';
  }
  if(DoneFlag){
    Done += '\t - \n';
  }
  text = Todo + Progress + Done;
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
