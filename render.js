
import {STATUSES,PRIORITIES} from './attributes.js'


const cardBlockHigh = document.getElementById('cardBlockHigh')
const cardBlockLow = document.getElementById('cardBlockLow')

export function render(list){

    while (cardBlockHigh.firstChild) {
        cardBlockHigh.removeChild(cardBlockHigh.firstChild);
    }
    while (cardBlockLow.firstChild) {
        cardBlockLow.removeChild(cardBlockLow.firstChild);
    }

    
    
    
    list.forEach((elem,index)=>{

        const newDiv = document.createElement('div');
        newDiv.className = 'todo__card'

        const newInput = document.createElement('input');
        newInput.className = 'card__checkbox'
        newInput.type = 'checkbox'
        newInput.checked === true

        function chengeStatus(){
            console.log(newInput.checked)
            if(newInput.checked){
                list[index].status = STATUSES.DONE
            } else
            list[index].status = STATUSES.IN_PROGRESS

            render(list)
        }
        
        newInput.addEventListener("click", chengeStatus);



        const newLabel = document.createElement('label');
        newLabel.className = 'todo__description'
        newLabel.textContent = elem.name

        const newButton = document.createElement('button');
        newButton.className = 'card__button'
        newButton.textContent = '+'


        function removeCard(){
            newDiv.remove()
        }
        newButton.addEventListener("click", removeCard);

        if(elem.status === STATUSES.DONE){
            newDiv.style.border = '1px solid green'
            newInput.checked = true
        }
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

