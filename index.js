
const button = document.getElementById('button')


function addCard(event){
    event.preventDefault()
    
    console.log(input.value)

    const newDiv = document.createElement('div');
    newDiv.className = 'todo__card'

    const newInput = document.createElement('input');
    newInput.className = 'card__checkbox'
    newInput.type = 'checkbox'


    const newLabel = document.createElement('label');
    newLabel.className = 'todo__description'
    newLabel.textContent = input.value

    const newButton = document.createElement('button');
    newButton.className = 'todo__button'
    newButton.textContent = '+'


    function removeCard(){
        newDiv.remove()
    }
    newButton.addEventListener("click", removeCard);


    newDiv.appendChild(newInput);
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newButton);

    todoBlockHigh.appendChild(newDiv);
    





}
console.log(123)

button.addEventListener("click", addCard);
