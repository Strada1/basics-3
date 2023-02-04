const todo = {
list:{
	"create a new practice task": "Done", 
	"make a bed": "Done", 
	"write a post": "To Do",
  "gym workout": "Done",
  "make call": "Done",
},
checkStatus(s){
    return (s=="To Do"||s=="Done"||s=="In Progress");           //проверяет вводимый статус
},
checkTask(t){
    for(let n in this.list){                                    //проверяет есть ли в перечне задач вводимая задача
      if(String(n) == String(t)){
        return true;
      }
    }
},
warningOut(t,s){
    if (!this.checkStatus(s) && !this.checkTask(t)){
      console.log('Status and task are incorrect!');           //выдает предупреждение о том, что именно ввели не так
      return false;
    }else if (!this.checkTask(t)){
      console.log('Task incorrect!');
      return false;
    }else if (!this.checkStatus(s)){
      console.log('Status incorrect!');
      return false; 
    }else {
      return true;
    }   
},  
showList(){
  let clonedone = {};
  let clonedo = {};
  let cloneprogress = {};                                   //Сделал после подсказки Дмитрия о том, что нужно глянуть тему "Копирование объектов" 
  let x = 0;
  let y = 0;
  let z = 0;
    for(let k in this.list){
      if(this.list[k]=='To Do'){
        x++;
        clonedo[k]=this.list[k] ;
      } 
        else if(this.list[k]=='In Progress'){
         y++;
         cloneprogress[k]=this.list[k];
        } 
        else if(this.list[k]=='Done'){
          z++;
          clonedone[k] = this.list[k];
        }    
    }
    if(x){
         for (let n in clonedo){
             console.log(n +':'+ clonedo[n]);
         }
    }else {
         console.log('Nothing to do');
    }
    if(y){
      for (let m in cloneprogress){
          console.log( m +':'+ cloneprogress[m]);
      }
    }else {
          console.log('Nothing in progress');
    } 
    if(z){
      for (let l in clonedone){
          console.log(l +':'+ clonedone[l]);
      }
    }else {
          console.log('Nothing is done');
    }  
},
changeStatus(x,y){
  if(!this.warningOut(x,y)){
    return false;
  }else{
       for(let n in this.list){
          if(String(n) == String(x)){
            this.list[n] = y;
           };
         }
       }
},
addTask(t,s){
  if(!this.checkStatus(s)){
    console.log('Status incorrect!');  
  } else if (this.checkTask(t)){
    console.log('Task alredy exist!')
  }else{ 
    this.list[t] = s;
  }
},
delTask(t){
  if(this.checkTask(t)){
    delete this.list[t]
  } else{
    console.log('Task incorrect!');
  }
},
showListBonus() {
  let x = 0;
  let y = 0;                                              //Скажу честно у кого-то подсмотрел, но там не было счетчиков поэтому работало некоректно когда небыло задачи в данном статусе
  let z = 0;                                                
  console.log("Todo:");
  for (let key in this.list) {
      if (this.list[key] == "To Do") {
         x++;
         console.log("\t" + key);
      }
  } 
  if(!x){
      console.log("\t"+ "_");
  }
  console.log("In Progress:");
  for (let key in this.list) {
      if (this.list[key] == "In Progress") {
         y++;
         console.log("\t" + key);
      }
  } 
  if(!y){
      console.log("\t"+ "_");
  }
  console.log("Done");
  for (let key in this.list) {
      if (this.list[key] == "Done") {
         z++;
         console.log("\t" + key);
      } 
  } 
  if(!z){
      console.log("\t"+ "_");
  }
},    
 }
todo.changeStatus('write a post','In Progress');
todo.addTask('go to bed', 'In Progress');
todo.delTask('make call')
todo.showListBonus();