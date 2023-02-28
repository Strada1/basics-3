const formAdTask = document.querySelector('#addTask');
console.log(formAdTask);
function addNewTask(event){;
  event.preventDefault();
  
  const textTask = document.querySelector('#addTextTask').value;
  if(textTask === ""){
    return alert('Введите текст')
  }

  const newForm = document.createElement("form");
  newForm.classList.add("section");

  const newFormInput = document.createElement("input");
  newFormInput.type = "radio";
  newFormInput.classList.add("check_btn");
  
  const newFormP = document.createElement("p");
  newFormP.textContent = textTask;

  const newFormButton = document.createElement("button");
  newFormButton.textContent='+'
  newFormButton.classList.add("del_button");

  

  newForm.appendChild(newFormInput);
  newForm.appendChild(newFormP);
  newForm.appendChild(newFormButton);

  document.querySelector('.high').appendChild(newForm);
  
}


formAdTask.addEventListener('submit',addNewTask);