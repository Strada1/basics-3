import{calcFunc} from './js/calc.js'

const numOne = document.getElementById('numOne')
const numTwo = document.getElementById('numTwo')
const selectSigns = document.getElementById('signs-select')
const container = document.querySelector('.container')
const resultBtn = document.getElementById('resultBtn')
const resultOut = document.getElementById('resultOut')
const cleanBtn = document.getElementById('cleanBtn')
const VALID_KEY = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', 'Backspace', 'Delete']
let a
let b
let z = []
let y = []
let result 

function clearAll() {
  numOne.value = ''
  numOne.classList.remove('number-error')
  numOne.removeAttribute('disabled')
  numOne.setAttribute('placeholder', 'number 1')
  z.splice(0, z.length)
  a = 0
  numTwo.value = ''
  numTwo.classList.remove('number-error')
  numTwo.removeAttribute('disabled')
  numTwo.setAttribute('placeholder', 'number 2')
  b = 0
  y.splice(0, y.length)
  selectSigns.value = ''
  resultOut.textContent = 0
  result = 0
  console.log(a, b, result, numOne.value, numTwo.value, selectSigns.value);
}

cleanBtn.onclick = clearAll

numOne.addEventListener('keypress', function (event) {
  if (VALID_KEY.includes(event.key)) {
    z.push(event.key)
    this.classList.remove('number-error')
    a = z.join('')
    return a
  } else {
    this.classList.add('number-error')
    resultOut.textContent = 'press key C'
    this.setAttribute('placeholder', 'error!')
    this.setAttribute('disabled', true)
    return
  }
})

numTwo.addEventListener('keypress', function (event) {
  if (VALID_KEY.includes(event.key)) {
    this.classList.remove('number-error')
    y.push(event.key)
    b = y.join('')
    return b
  } else {
    this.classList.add('number-error')
    resultOut.textContent = 'press key C'
    this.setAttribute('placeholder', 'error!')
    this.setAttribute('disabled', true)
    return
  }
})

resultBtn.addEventListener('click', function () {

  let sign = selectSigns.value
  result = calcFunc(a, b, sign)
  
    resultOut.textContent = result
    let newDiv = document.createElement('div')
    newDiv.classList.add('history')
    newDiv.textContent = result
    container.appendChild(newDiv)

    newDiv.addEventListener('click', function () {
      newDiv.remove()
    })
     
})