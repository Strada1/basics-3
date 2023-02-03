const list ={
   tasks: {
    "Post my new song": "Done",
    "Wake up at 8 am": "Done",
    "Do 19th task of Strada": "In Progress",
    "Visit dentistry": "To Do"
    },
    showList(){
      for(key in this.tasks){
        if(this.tasks[key]==="To Do"){
            console.log("To Do:");
            break;
      }}
      for(key in this.tasks){
      if(this.tasks[key]==="To Do"){
        console.log('\x1b[33m%s\x1b[0m', key, " : " ,this.tasks[key]);}}
        for(key in this.tasks){
            if(this.tasks[key]==="Done"){
                console.log("Done:");
                break;
          }}
          for(key in this.tasks){
          if(this.tasks[key]==="Done"){
            console.log('\x1b[33m%s\x1b[0m', key, " : " ,this.tasks[key]);}}
            for(key in this.tasks){
                if(this.tasks[key]==="In Progress"){
                    console.log("In Progress:");
                    break;
              }}
              for(key in this.tasks){
              if(this.tasks[key]==="In Progress"){
                console.log('\x1b[33m%s\x1b[0m', key, " : " ,this.tasks[key]);}}},
    addTask(key, value){
       if(typeof key === "string"){
         if(value === "Done" || value === "In Progress" || value === "To Do"){
        if(key in this.tasks){
        console.log("\x1b[31m","This task is already exist");
        }   else{
                this.tasks[key]=value;
                console.log("\x1b[32m", `Successfully added new task: '${key}' with status: '${value}'`);}
    }   else{
        console.log("\x1b[31m","You can't use this status!");
    }}  else{
        console.log("\x1b[31m", "You can use only 'String' type for tasks");
    }
    },
    deleteTask(key){
        if(typeof key === "string"){
        if(key in this.tasks === true){
        delete this.tasks[key];
        console.log("\x1b[32m",`Successfully deleted task: '${key}'`);
    }   else{
        console.log("\x1b[31m",`Task '${key}' is not in list of tasks`);
    }}   else{
        console.log("\x1b[31m", "You can use only 'String' type for tasks");
    }
    },
    changeStatus(key, value){
        if(typeof key === "string"){
        if(value === "Done" || value === "In Progress" || value === "To Do"){
        if(key in this.tasks === false){
            console.log("\x1b[31m","This task doesn't exist, try to use method 'addTask(key, value)'");
            }   else{
            this.tasks[key]=value;
            console.log("\x1b[32m",`Status of '${key}' task was successfully changed to '${value}'`);}
    }   else{console.log("\x1b[31m","You can't use this status!")}}   else{
        console.log("\x1b[31m", "You can use only 'String' type for tasks"); 
    }
}};

list.addTask("Become developer", "In Progress");// using method "list.addTask" to add new task
list.addTask(12321,123);// key should always be string!
list.addTask("Become developer","Done"); // to forbide use method "list.addTask" if task is already exist
list.showList();// output 'new' list