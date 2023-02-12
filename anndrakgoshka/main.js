const list = {
	'create a new practice task': 'In Progress',
	'make a bed': 'To Do',
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
		
		list[task] = stat;

	};

	function deleteTask(task) {
		delete list[task];
	}

		function showList() {

			console.log('To Do');
			for (const task in list) {
				if (list[task] === 'To Do') {
					console.log(task)
				} 
			}


			console.log('In Progress')
			for (const task in list) {
				if (list[task] === 'In Progress') {
					console.log(task)
				}
				
		}


		console.log('Done')
		for (const task in list) {
			if (list[task] === 'Done') {
				console.log(task)
			} else if (list[task] !== 'In Progress' || 'To Do'){
      console.log("ничего не найдено")
    }
		}
		}


	showList();