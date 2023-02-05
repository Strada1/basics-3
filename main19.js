const todo = {
list: {
	"complete the task": "In Progress", // задача "выполнить задание" в статусе "В процессе" 
	"have breakfast": "Done", // задача "позавтракать" в статусе "Готово"
	"write a script": "To Do", // задача "написать скрипт" в статусе "Выполняется" 
    "take a walk": "skipped", // задача "прогуляться" в статусе "Пропущена" 
    "call a friend": "new task" // задача "позвонить подружке" в статусе "Новая задача" 
},
changeStatus(task, status) {
  this.list[task] = status; ;
},
addTask(task, status) { 
  this.list[task] = status; 
  if(this.list[task] === undefined) {
    this.list[task] = 'new task';
  }
},
deleteTask(task, status) {
    delete this.list[task] ;
  },

showList () {
  let counterDone=0;
  for(task in this.list){
    if(this.list[task]==="In Progress"){
        console.log(task + " : In Progress");
    }
  }
  for(task in this.list){
    if(this.list[task]==="To Do"){
      console.log(task + " : To Do");
    }
  }
  for(task in this.list){
    if(this.list[task]==="skipped"){
      console.log(task + " : skipped");
    }
  }
  for(task in this.list){
    if(this.list[task]==="new task"){
      console.log(task+" : new task");  
      counterDone++;
    }
  }
    switch (counterDone) {
      case 0:
      console.log('Nothing is done'); 
    }
},
};
todo.changeStatus('complete the task', 'To Do'); 
todo.addTask('call a friend'); 
todo.changeStatus('write a script', 'Done');
todo.deleteTask('have breakfast'); 
todo.showList (); 