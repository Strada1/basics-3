const list = {
  "create a new practice task": "In progress",
  "make cookie": "Done",
  "Write code": "To Do",
  "Learn js": "To Do",
  }
  function changeStatus(task, status) {
  
  return list[task] = status, console.log('Статус задачи "' + task + '" изменен'); 
  }
  function addTask(task,status) {
      if (task in list) {
       return console.log("Уже существует"); 
      }
      else {
      return list[task] = status = "To Do", console.log('Задача добавлена')
    }
  }
  function deleteTask(task) { 
    if (task in list) {
      return delete list[task], console.log('Задача "' + task + '" удалена');
    }
    else{
      console.log('Задачи "' + task + '" нет в списке' );
    }
  }
  function showList() {
    for (rezultat in list) {
      console.log(rezultat + '  --  ' + list[rezultat]);
 
    }
   //  console.log('Список задач', list);

      
  }
  showList();
  changeStatus("Learn js","Done");
  showList();

