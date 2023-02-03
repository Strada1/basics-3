const list = {
  "create a new practice task": "In progress",
  "make cookie": "ToDo",
  "Go to the bed": "ToDo",
  "Make meme": "ToDo",
  "Meme Time": "In progress",
  "Write code": "In progress",
  "Learn js": "ToDo",
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


  function showDoneCount() {
    for (rezultat in list) { 
      
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

  function showDone() {
    for (rezultat in list) {
      if (list[rezultat] == "In progress" || list[rezultat] == "ToDo" ) continue;
      console.log(rezultat + '  ' + list[rezultat]);
        }
  }
  function showToDo() {
    for (rezultat in list) {
      if (list[rezultat] == "In progress" || list[rezultat] == "Done" ) continue;
      console.log(rezultat + '  ' + list[rezultat]);
        }
  }
  function showInprogress() {
    for (rezultat in list) {
      if (list[rezultat] == "ToDo" || list[rezultat] == "Done" ) continue;
      console.log(rezultat + '  ' + list[rezultat]);
        }
  }
  function showMeALL() {
    console.log('')
    showDone();
    showInprogress();
    console.log('')
    showToDo();
    console.log('')
    showDoneCount();
  }
 showMeALL();