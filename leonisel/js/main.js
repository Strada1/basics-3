const forms = document.querySelectorAll('.forms');
const highBox = document.querySelector('.high-box');
const lowBox = document.querySelector('.low-box');
const inputLow = document.querySelector('#input-low');
const inputHigh = document.querySelector('#input-high');

function getInputData(event) {
  event.preventDefault();
  const dataForm = event.target[0].value;
  const newElement = document.createElement('div');

  function createDivTemplate(dataForm) {

    newElement.classList.add('task-box');
    newElement.insertAdjacentHTML('afterbegin', `<label class="label-checkbox-task">
                                                 <input type="checkbox" class="input-checkbox-task">
                                                 <span class="fake-checkbox"></span>
                                                 </label>
                                                 ${dataForm}                                           
                                                 <span class="close-task-btn"></span>`
                                                 );
    return newElement;                                     
  }

  if(event.target[0].id === 'input-high') {
    createDivTemplate(dataForm);
    highBox.append(newElement);
  }

  if(event.target[0].id === 'input-low') {
    createDivTemplate(dataForm);
    lowBox.append(newElement); 
  }                                        
}

for(const elem of forms) {
  elem.addEventListener('submit', getInputData);
}
