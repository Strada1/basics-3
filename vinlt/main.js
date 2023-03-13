let form = document.getElementById("inputChildDiv1")
let button = document.getElementById("high-add-button")
let newDiv= document.getElementById("high-task-collector")
let input = document.getElementById("add-high-task-field")
let bos = document.getElementById("high-priority-task-field") 
const list = []
function render() {
//	let dlt = document.createElement("button")
    let newS4 = document.createElement("div");
    
    
    let newS1 = document.createElement("input");
		

    let newS = document.createElement("div");
		

    let dlt = document.createElement("button")
		

		list.map(task => {
			
      newDiv.appendChild(newS4)
      newS4.className = 'newS4'
      

      newS4.appendChild(newS1)
			newS1.className = 'input_del'
			newS1.type = 'checkbox'


			newS4.appendChild(newS)
			newS.className = 'del_div'
			newS.textContent = task.value;

			newS4.appendChild(dlt)
			dlt.textContent = 'x';
			dlt.className = 'butdel'
	  })
    if (!list.length == 0){
      dlt.onclick = function () {
				dlt.parentElement.remove();	
        console.log(1)
    }
  }
		
}

function addStat() {
	let lister = {
		id: Math.random(),
  	value: input.value,
  }
	list.push(lister)
	render()
	console.log(list.id)
}
button.addEventListener('click', addStat)


 
 


function deleteTask(event) {
	if (event.target.className == 'butdel') {
//  const user = list.find(user => user.id === Math.random());
//  console.log(user)
//  let a = list.indexOf(event.target.className == 'but_del')
    list.splice(0, list.length)
    render()
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
//event.target.className == 'but_del'
const users = [
  { name: 'Ivan', age: 18 },
  { name: 'Petr', age: 25 },
  { name: 'Anna', age: 20 }
];
const user = users.find(user => user.name === 'Petr');
console.log(user)