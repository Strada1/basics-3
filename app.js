import {selected} from './calculateFunction.js'

const buttonCalc = document.querySelectorAll('.equals')[0]
const finalNumber = document.querySelectorAll('.finalNumber')[0]
const section = document.querySelector('section')

function calculate(){

    const createDiv = document.createElement('div')
    const firstNumber = document.getElementById('firstNumber').value
    const lastNumber = document.getElementById('lastNumber').value
    const signAll = document.getElementById('select')
    const signSelected = signAll.querySelector(`option[value="${signAll.value}"]`).value  

    let result = selected(signSelected,firstNumber,lastNumber)
    finalNumber.innerHTML = result

    function removeResult(){
        createDiv.remove()
    }
    (function addResult(){
        createDiv.textContent = result
        createDiv.className = "createResult"
        document.body.appendChild(createDiv)
    })()

    createDiv.addEventListener('click', removeResult)
}

buttonCalc.addEventListener('click', calculate)