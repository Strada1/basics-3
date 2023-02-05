const todo = {
  list: {
	"read book": "In Progress", 
	"go to swim": "To Do", 
	"buy food": "To Do",
  "record a video": "In Progress",
	"english homework": "In Progress"
  },
  changeStatus(task, status) {
    this.list[task] = status; ;
  },
  addTask(task, status) { 
    this.list[task] = status; 
    if(this.list[task] === undefined) {
      this.list[task] = 'To Do';
    }
  },
  deleteTask(task, status) {
    delete this.list[task] ;
  },
  showList () {
    let counterDone=0;
    for(task in this.list){
      if(this.list[task]==="To Do"){
          console.log(task + " : To Do");
      }
    }
    for(task in this.list){
      if(this.list[task]==="In Progress"){
        console.log(task + " : In Progress");
      }
    }
    for(task in this.list){
      if(this.list[task]==="Done"){
        console.log(task+" : Done");  
        counterDone++;
      }
    }
      switch (counterDone) {
        case 0:
        console.log('Nothing is done'); 
      }
  },
};
todo.changeStatus('record a video', 'To Do'); 
todo.addTask('have a walk'); 
todo.addTask('call boss'); 
todo.changeStatus('have a walk', 'To Do');
todo.deleteTask('buy food'); 
todo.showList (); 