
let list = [  
    {name: 'create a post', status: 'In progress', priority: 'low'},  
    {name: 'test', status: 'Done', priority: 'high'} , 
    {name: 'text', status: 'To Do', priority: 'low'}, 
    
];  
   function deleteTask (task) { 
       list = list.filter(word => word.name !== task); 
    };  

     
    function addTask (task, status, priority ) { 
        list.push ({name: task, status: status, priority: priority}); 
        
    }; 
   
 
    function chancheStatus(task, status) { 
        const currentTask = list.find(item => item.name === task); 
        if (currentTask.status !== status) { 
        currentTask.status = status 
      }; 
    };  
   
 
    function showList () { 
        const doneList = list.filter(item => item.status === 'Done'); 
        console.log(doneList); 
        const inprogressList = list.filter(item => item.status === 'In progress'); 
        console.log(inprogressList); 
        const lowList = list.filter(item => item.status === 'To Do'); 
        console.log(lowList); 
    } 

    showList();
