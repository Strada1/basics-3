const STATUS = {
  "To Do": "To Do",
  "Done": "Done",
  "In Progress": "In Progress"
}
const list = {
  "create a new practice task": "In Progress", 
  "make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
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
  console.log(`Статус для "${task}" был изменен с "${lastStatus}" на "${status}"`);
}
function addTask(task){
  if(task in list){
      console.log("Такая задачка уже есть");
  }
  if(task === "" || task === undefined){
      console.log("Вы не ввели задачку");
  }
  list[task] = "To Do";
  console.log(`Задача "${task}" была успешно добавлена в список`);
}
function deleteTask(task){
  if(!(task in list)){
      return console.log("Такой задачи нет в списке");
  }
  if(task === "" || task === undefined){
      return console.log("Вы не ввели задачку для удаления");
  }
  delete list[task];
  console.log(`Задача "${task}" была успешно удалена из списка`);
}
function test(status){
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
    test("To Do");
    test("Done");
    test("In Progress");
}
changeStatus("write a post", "Done") // меняет статус задачи
addTask("learn PHP"); // добавляет новую задачу
deleteTask("learn PHP"); // удаляет задачу
showList(); // показывает список всех задач
