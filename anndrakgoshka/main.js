const list = {
	'create s new practice task': 'In Progress',
	'make a bed': 'Done',	
	'write a post': 'To Do',
}

function changeStatus (task, stat) {
	if (list[task] !== stat) {
	list[task] = stat;
	}
};

function addTask(task, stat) {
	if (!task) {
		return console.log('error')
	}
	for (const currentTask in list) {
		if(currentTask === task) {
			return console.log('error')
		}
	}	
	
	if(task in list) {
		return list[task] 
	}
	list[task] = stat;
	
	
};

function deleteTask(task) {	
	delete list[task];
};


function showList() {
let done = '';
let inProgress = '';
let toDo = ''

for (const task in list) {
	if (list[task] === 'Done') {
   done += `${task}, \n`;
} else if (list[task] === 'In Progress') {
   inProgress += `${task}, \n`
 } else {
   toDo += `${task}, \n`
}
}
if(!done) {
  done = 'Nothing is done\n'
 }
 if(!inProgress) {
  inProgress = 'Nothing is inProgress\n'
 }
 if(!toDo) {
  toDo = 'Nothing is todo\n'
 }
 return console.log(`Done: \n${done} In Progress: \n ${inProgress} To do: \n${toDo}`);
}



changeStatus('write a post', 'Done');
addTask('have a walk', 'To Do');
deleteTask('have a walk');
showList();