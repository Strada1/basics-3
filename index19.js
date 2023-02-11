


    /*const myFamily = {
        list: {
        Kate: {
            'name': 'Kate Mayevskay',
            'gender': 'women',
            'age': 21,
            'phone': 89358655584,
            'address': 'Stavropol'},
        Natali: {
            'name': 'Natali Balashova',
            'gender': 'women',
            'age': 43,
            'phone': 894694736727737,
            'address': 'Labinsk'
        },
        Anastasiya: {
            'name': 'Anastasiya Balashova',
            'gender': 'women',
            'age': 14,
            'phone': 1123356478,
            'address': 'Labinsk'  
        }, 
        
    },
   
    };
    if (myFamily.list.Anastasiya['age'] >= 18) {
        console.log(myFamily.list.Anastasiya['name'] + ' ЗАХОДИ');
} else  {
    console.log(myFamily.list.Anastasiya['name'] + ' CОРИ');
}
    for (const person in myFamily.list) {
        console.log(person + ' - ' 
        + myFamily.list.Kate['name'] 
        + ' + ' + myFamily.list.Kate['age']
        + ' + ' + myFamily.list.Kate['phone']
        + ' + ' + myFamily.list.Kate['address']
        );
        
    };
    
    console.log(myFamily.list)*/
    

    const todoList = {
        list: {
            'go to university': 'Done',
            'eat up': 'Done',
            'go to ВБ': 'in progress',
            'perform a task': 'to do',
        },
    };
        function changeStatus(task ,status) {
            todoList.list[task] = status;
        };
        function deleteTask (task) {
            delete todoList.list[task];
        };
        function addTask (task, status) {
            todoList.list[task] = status;
        };
        function showList () {
            let a = 0;
            let b = 0;
            let c = 0;

            for (task in todoList.list) 
            if (todoList.list[task] === 'Done' && a < 1) 
            
            {   a++;
                console.log(`\n\"${task}\" : ${todoList.list[task]}`)
            } else if (todoList.list[task] === 'Done' && a >= 1)
            
            {   a++;
                console.log(`\"${task}\" : ${todoList.list[task]}`)
            };


            for (task in todoList.list) 
            if (todoList.list[task] === 'to do' && b < 1) 
            
            {   b++;
                console.log(`\n\"${task}\" : ${todoList.list[task]}`)
            } else if(todoList.list[task] === 'to do' && b >= 1) 
            
            {   b++;
                console.log(`\"${task}\" : ${todoList.list[task]}`)
            };


            for (task in todoList.list)  
            if (todoList.list[task] === 'in progress' && c < 1)
             
            {    c++;
                console.log(`\n\"${task}\" : ${todoList.list[task]}`)
            } else if (todoList.list[task] === 'in progress' && c >= 1)
            
            {   c++;
                console.log(`\"${task}\" : ${todoList.list[task]}`)
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
        };
        addTask('dead', 'Done')
        deleteTask('go to ВБ')
        showList()
    
   

    