let form = document.getElementById("inputChildDiv1")
let button = document.getElementById("addHighDiv")
let newDiv= document.getElementById("highTask")
let input = document.getElementById("highInput")

const list = []
function render() {
//	let dlt = document.createElement("button")
//	if (list[0]){
//		console.log(123)
//		dlt.parentElement.remove();	
	
//	}else {
		list.forEach(task => {
			let newS4 = document.createElement("div");
			newDiv.appendChild(newS4)
			newS4.className = 'newS4'

			let newS1 = document.createElement("input");
			newS4.appendChild(newS1)
			newS1.className = 'input_del'
			newS1.type = 'checkbox'


			let newS = document.createElement("div");
			newS4.appendChild(newS)
			newS.className = 'del_div'
			newS.textContent = task.value;

			let dlt = document.createElement("button")
			newS4.appendChild(dlt)
			dlt.textContent = 'x';
			dlt.className = 'but_del'
//			dlt.onclick = function () {
	//			console.log(list.indexOf())
//				dlt.parentElement.remove();
//				}
		})
//	}
		
}

function addStat() {
	let addList = {
		id: Math.random(),
//		value: input.value,
	}
	list.push(addList)
	render()
	console.log(list[0])
}
button.addEventListener('click', addStat)



function deleteTask(event) {
	if (event.target.className == 'but_del') {
		if(list[0] = Math.random()) {	
			console.log(list)
	}
//	render()
}	
//	  const index = list.findIndex((task) => task.id == id);
//	  list.splice(index, 1);
//	  event.target.parentElement.remove();
//	render();
//	document.querySelector('but_del').addEventListener("click", deleteTask);
}
document.addEventListener("click", deleteTask);

// const list = [];
//let input = document.getElementById("add-high-task-field")
//let button = document.getElementById("high-add-button")
//let newDiv= document.getElementById("high-task-collector")

//function createTask(formValueContent, collector) {
//	const taskText = formValueContent;
//	const addNew = {
//		id: Date.now(),
//		name: taskText,
//	  };
//	  list.unshift(addNew);
//	  const taskHTML = `<div class="task" id=${addNew.id} >
//		<input type="checkbox" class="check" />
//		<div class="todo-content">
//		${addNew.name}
//		</div>
//		<button data-action="delete" class="delete-task-button">+</button>
//		</div>`;
	
//	  collector.insertAdjacentHTML("afterbegin", taskHTML);
//}

//function addHighTask(event) {
//	event.preventDefault();
//	createTask(input.value, newDiv);
//}
//button.addEventListener("click", addHighTask);

