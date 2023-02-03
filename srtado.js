/*function calc(operation, a, b ){
    switch(operation)
    {
        case 'add':
            console.log(a+b);
            break;
        case 'multi':
            console.log(a*b);
            break;   
        case 'subtract':
            console.log(a-b);
            break;   
    
    }
    }
    calc('add', 1,2)
    calc('multi', 1,2)
    calc('subtract', 3, 2)
   
    for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
          console.log(i);
        }
      }
      console.log('проверка коммита');*/



      const list = {  
  
        'create a new practice task': 'In Progress',
        'make a bed': 'Done',
        'write a post': 'To Do',
      
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
    
    function showList (plan, status) {
      for (let i=0; ; i++){
        if(list[plan]=='Todo'){
          console.log(list[plan], ':Todo');
        }
        else{
          console.log('Nothing is Todo');
        }
        break;
      }
      
      for (let i=0; ; i++){
        if(list[plan]=='Done'){
          console.log(list[plan], ':Done');
        }
        else{
          console.log('Nothing is Done');
        }
        break;
      }
    
      for (let i=0; ; i++){
        if(list[plan]=='In Progress'){
          console.log(list[plan], ':In Progress');
        }
        else{
          console.log('Nothing is In Progress');
        }
        break;
      }
      console.log(list);
    }
    
    changeStatus("write a post", "Done") // меняет статус задачи
    addTask('have a walk'); // добавляет новую задачу
    deleteTask('have a walk'); // удаляет задачу
    addTask('dinner');
    changeStatus('dinner', 'ToDo')
    showList(); // показывает список всех задач  
    addTask('play footbal', 'ToDo');

