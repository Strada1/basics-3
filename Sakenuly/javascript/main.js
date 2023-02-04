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
      return list[task] = status = "ToDo", console.log('Задача добавлена')
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
      console.log('Done:');
    for (rezultat in list) {
      if (list[rezultat] == "In progress" || list[rezultat] == "ToDo" ) continue;
      console.log('\t' + rezultat + '  ' + list[rezultat]); //можно было убрать list[rezultat] для бонусного задания но для наглядности пусть будет)
      
        }
  }
  function showToDo() {
    console.log('To Do:');
    for (rezultat in list) {
      if (list[rezultat] == "In progress" || list[rezultat] == "Done" ) continue;
      console.log('\t' + rezultat + '  ' + list[rezultat]);
        }
  }
  function showInprogress() {
    console.log('In Progress:');
    for (rezultat in list) {
      if (list[rezultat] == "ToDo" || list[rezultat] == "Done" ) continue;
      console.log('\t' + rezultat + '  ' + list[rezultat]);
        }
  }
  function showMeALL() {
    console.log('')
    showDone();
    console.log('')
    showInprogress();
    console.log('')
    showToDo();
    console.log('')
    showDoneCount();
  }
 addTask("Make a zavtrak");
 changeStatus("Make a zavtrak", "Done");
 addTask("Make mass");
 changeStatus("Make mass", "In progress");
 showMeALL();