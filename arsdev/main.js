const STATUSES = {
  
    INPROGRESS: 'In Progress',
    DONE: 'Done',
    MAKE: 'To Do',
     
    };
    
    const toDo = {
      list: {
        'create a new practice task': STATUSES.INPROGRESS,
        'make a bed': STATUSES.DONE,
        'write a post': STATUSES.MAKE,
      },
      
      changeStatus(task, status) {
        this.list[task] = status;
        
      },
      
      addTask(task, status) {
        this.list[task] = status;
        
      }, 
    
      
      deleteTask(task) {
        delete this.list[task];
       
      },
      
      showList() {
        
         let checkToDo = 0;
         let checkInProgress = 0;
         let checkDone = 0;
         
        
         console.log('Todo:');
         for (task in toDo.list) {
           if (toDo.list[task] === STATUSES.MAKE) {
             console.log(task);
             checkToDo++;
           }
         }
         if (checkToDo === 0) {
           console.log('-');
         }
         console.log('In progress:');
         for (task in toDo.list) {
           if (toDo.list[task] === STATUSES.INPROGRESS) {
             console.log(task);
             checkInProgress++;
           }
         }
         if (checkInProgress === 0) {
           console.log('-');
         }
         console.log('Done:');
         for (task in toDo.list) {
           if (toDo.list[task] === STATUSES.DONE) {
             console.log(task);
             checkDone++;
           }
         }
         if (checkDone === 0) {
           console.log('-');
         }
    
       }
     };
     
    
    toDo.changeStatus('create a new practice task', STATUSES.DONE);
    
    toDo.addTask('read more about onjects', STATUSES.INPROGRESS);
    
    toDo.addTask('more practice', STATUSES.MAKE);
    
    toDo.addTask('watch Alf', STATUSES.DONE);
    
    toDo.deleteTask('watch Alf');
    
    toDo.showList();
    
