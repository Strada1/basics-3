const todoList = {
    list: {
        'go to university': 'Done',
        'eat up': 'Done',
        'go to ВБ': 'in progress',
        'perform a task': 'to do',
    },
    changeStatus: function (task ,status) {
        this.list[task] = status;
    },
    deleteTask: function  (task) {
        delete this.list[task];
    },
    addTask: function  (task, status) {
        this.list[task] = status;
    },
    showList: function  (task, status) {
        let a = 0;
        let b = 0;
        let c = 0;

        for (task in this.list) 
        if (this.list[task] === 'Done' && a < 1) 
        
        {   a++;
            console.log(`\n\"${task}\" : ${this.list[task]}`)
        } else if (this.list[task] === 'Done' && a >= 1)
        
        {   a++;
            console.log(`\"${task}\" : ${this.list[task]}`)
        };


        for (task in this.list) 
        if (this.list[task] === 'to do' && b < 1) 
        
        {   b++;
            console.log(`\n\"${task}\" : ${this.list[task]}`)
        } else if(this.list[task] === 'to do' && b >= 1) 
        
        {   b++;
            console.log(`\"${task}\" : ${this.list[task]}`)
        };


        for (task in this.list)  
        if (this.list[task] === 'in progress' && c < 1)
         
        {    c++;
            console.log(`\n\"${task}\" : ${this.list[task]}`)
        } else if (this.list[task] === 'in progress' && c >= 1)
        
        {   c++;
            console.log(`\"${task}\" : ${this.list[task]}`)
        }
        if (a == 0) {
            console.log('\nNothing is \'Done\'')
        }
        if (b == 0) {
            console.log('\nNothing is \'To Do\'')
        }
        if (c == 0) {
            console.log('\nNothing is \'In Progress\'')
        }
},
   
    };
    todoList.addTask('dead', 'Done')
    todoList.deleteTask('go to ВБ')
    todoList.showList()