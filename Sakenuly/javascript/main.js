const list = {
  "create a new practice task": "In progress",
  "make cookie": "Done",
  "Meme Time": "Done",
  "Write code": "Done",
  "Learn js": "Done",
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
  let doneCount = 0;


  function showList() {
    for (rezultat in list) { 
      console.log(rezultat + '  --  ' + list[rezultat]);
      if (list[rezultat] == "Done") {doneCount = doneCount + 1;
      }
    }
    if (doneCount == 0) {
      console.log('Ты лентяй!');
    }
      else if (doneCount > 0) {
        console.log('Выполненных задач ' + doneCount);
        }
    }
     
    
    

  showList();

