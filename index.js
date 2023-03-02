
const buttonHigh = document.getElementById('buttonHigh')
const buttonLow = document.getElementById('buttonLow')
const todoBlockHigh = document.getElementById('todoBlockHigh')
const todoBlockLow = document.getElementById('todoBlockLow')
const cardBlockHigh = document.getElementById('cardBlockHigh')
const cardBlockLow = document.getElementById('cardBlockLow')

const input = document.getElementById('input')
const formHigh = document.getElementById('formHigh')
const formLow = document.getElementById('formLow')



const STATUSES = {
    TODO: "To Do",
    IN_PROGRESS: "In progress",
    DONE: "Done",
};
const PRIORITIES = {
    HIGH: "High",
    LOW: "Low",
};

const list = [


];



function addTask(event){
    event.preventDefault()
    if(event.target === buttonHigh){
        priority = PRIORITIES.HIGH

    }
    if(event.target === buttonLow){
        priority = PRIORITIES.LOW


    }
    
    list.push({
        name: input.value,
        priority
    })
    
    while (cardBlockHigh.firstChild) {
        cardBlockHigh.removeChild(cardBlockHigh.firstChild);
    }
    while (cardBlockLow.firstChild) {
        cardBlockLow.removeChild(cardBlockLow.firstChild);
    }
    render(list)
    


}







function render(event){
    
    
    
    
    list.forEach((elem)=>{
        console.log(input.value)

        const newDiv = document.createElement('div');
        newDiv.className = 'todo__card'

        const newInput = document.createElement('input');
        newInput.className = 'card__checkbox'
        newInput.type = 'checkbox'


        const newLabel = document.createElement('label');
        newLabel.className = 'todo__description'
        newLabel.textContent = elem.name

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
        if(elem.priority === PRIORITIES.HIGH){
            cardBlockHigh.appendChild(newDiv);

        }
        if(elem.priority === PRIORITIES.LOW){
            cardBlockLow.appendChild(newDiv);

        }
    })




}

buttonHigh.addEventListener("click", addTask);
buttonLow.addEventListener("click", addTask);

