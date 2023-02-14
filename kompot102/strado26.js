const list = [ 
    {name: 'create a post', status: 'In progress', priority: 'low'}, 
  {name: 'test', status: 'Done', priority: 'high'}, 
  {name:'gym', status: 'In progress', priority:'middle' },
  {name: 'footbal', status:'Done', priority:'low'},
  {name: 'play pc', status:'Done', priority:'low'}

  
];


function addTask (name, status, priority){
    list.push({name: name, status: status, priority:priority});
    console.log(name, status, priority);
};

function deleteTask (task){
    
    const delIndex = list.findIndex(delIndex => delIndex.name === task);
        //const twoindex = 1;
    list.splice(delIndex, 1);
    console.log("задача", task, "была удалена" );
    
}

function changeStatus (titles, newStatus, ){
    const teg = list.find(teg=>teg.name===titles);
        if (teg.status!=newStatus) {
            teg.status=newStatus;
            console.log('статус извенен на', newStatus);
        }    
}




function showList() {
    let priority_numbers = {
        low: 1,
        middle: 2,
        high: 3
    }
    function compare( a, b ) {
        return priority_numbers[b.priority]-priority_numbers[a.priority]
      }
      const sortedList = list.sort (compare);
      console.log(sortedList);
      
}




deleteTask('test');
addTask('have a walk', 'Done', 'high');
changeStatus('create a post', 'Done') //не сделано 
showList();



