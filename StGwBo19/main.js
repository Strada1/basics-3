const ToDoList = {
   today: {
      'Learn English': 'Done',
      'Programming': 'In progress',
      'Exercise': 'To Do',
      'HTML code': 'To Do',
      'Hehe': 'Done',
      'Proverka': 'In progress',
   },
 
   showlist(){
      for(const show in ToDoList.today){
         if (ToDoList.today[show]==='Done') {console.log(show + ':' + ToDoList.today[show]);}
        
         
      }
      for(const show in ToDoList.today){
       if (ToDoList.today[show]==='In progress') {console.log(show + ':' + ToDoList.today[show]);}
     }
     for(const show in ToDoList.today){
       if (ToDoList.today[show]==='To Do') {console.log(show + ':' + ToDoList.today[show]);}
     }
   },
 
   changeStatus(task, status){
      this.today[task] = status
   },  
 
   addtask(task2,status2){
      this.today[task2] = status2
   },
 
   deleteTask(task3){
      delete this.today[task3]
   },
 
   
 } ; 


 

ToDoList.addtask('fewf', 'efwef');

ToDoList.changeStatus('HTML code', 'Done');

ToDoList.deleteTask('Programming');


ToDoList.showlist();
