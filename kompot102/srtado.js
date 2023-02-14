      const list = {  
  
        'create a new practice task': 'In Progress',
        'make a bed': 'Done',
        'write a post': 'To Do',
        'я поехал': 'In Progress'
      
    }
    
    function addTask(plan, status) {
      if (plan in list) {
        console.log('задача уже есть в списке ');
      }
      else if (!(plan in list)) {
        list[plan]=status;
        console.log('добавлена новая задача - ', plan);
      }
    }
    
    function deleteTask(plan, status) {
      if (plan in list) {
        delete list[plan];
        console.log(plan, 'был удален из списка');
      }
    }
    
    function changeStatus(plan, status) {
      list[plan]=status;
    }
    
    function showList (){
      let flag=false;
      for (let key in list){
        if (list[key]=='To Do'){
          flag=true;
          console.log(key, ':To Do');
        }
      }
      if (flag==false){
        console.log('Nothing is To Do');
      }
      console.log();
      //сверху все задачи ToDo
      flag=false;
      for (let key in list){
        if (list[key]=='In Progress'){
          flag=true;
          console.log(key, ':In Progress');
        }
      }
      if (flag==false){
        console.log('Nothing is In Progress');
      }
      console.log();
    //сверху все для In progress
    flag=false;
    for (let key in list){
      if (list[key]=='Done'){
        flag=true;
        console.log(key, ':Done');
      }
    }
    if (flag==false){
      console.log('Nothing is Done');
    }
    console.log();
    }
    
    changeStatus("write a post", "Done") // меняет статус задачи
    addTask('have a walk'); // добавляет новую задачу
    //deleteTask('have a walk'); // удаляет задачу
    addTask('dinner');
    changeStatus('dinner', 'To Do');  
    addTask('play footbal', 'To Do');
    changeStatus('я поехал', 'To Do');
     // показывает список всех задач
    
    changeStatus("write a post", "Done") // меняет статус задачи
addTask('have a walk'); // добавляет новую задачу
deleteTask('have a walk'); // удаляет задачу
console.log();
showList();



// console.log('Nothing is Todo');

