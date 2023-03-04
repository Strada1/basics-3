import {render} from './render.js'
import {STATUSES,PRIORITIES} from './attributes.js'

const buttonHigh = document.getElementById('buttonHigh')
const buttonLow = document.getElementById('buttonLow')
const inputHigh = document.getElementById('inputHigh')
const inputLow = document.getElementById('inputLow')




const list = [];
let priority


function addTask(event){
    event.preventDefault()

    try{
        const inputLowValue = inputLow.value
    const inputHighValue = inputHigh.value
  

    if(event.target === buttonHigh){
        priority = PRIORITIES.HIGH

    }
    if(event.target === buttonLow){
        priority = PRIORITIES.LOW


    }

    if(inputLowValue === ''){
        list.push({
            name: inputHighValue,
            priority,
            status:'In progress'
        })
    }

    if(inputHighValue === ''){
        list.push({
            name: inputLowValue,
            priority,
            status:'In progress'
        })
    }
    if(inputHighValue === '' || inputLowValue === ''){
        throw new Error('Не правильный ввод данных')
    }
    
    
    
    inputLow.value = ""
    inputHigh.value = ""
    render(list)

    }catch(er){
        alert(er)
    }
    


}









buttonHigh.addEventListener("click", addTask);
buttonLow.addEventListener("click", addTask);

