import {obj} from './modl.js'
import {signs} from './check.js'

const CULCBT = document.getElementById('calc__bt')

function calculation() {
  const newDiv = document.createElement('div')
  let result = null

  let valueA = Number(obj.CULCNUM[0].value)
  let valueB = Number(obj.CULCNUM[1].value)

  let sign = obj.CULCLIST.sign.value
  let spaces = '\u00A0'

  if (sign === signs.PLUS) {
    result = valueA + valueB
  } else if (sign === signs.MINUS) {
    result = valueA - valueB
  } else if (sign === signs.MULTIPLY) {
    result = valueA * valueB 
  } else if (sign === signs.DIVIDE) {
    result = valueA / valueB 
  }
  parseFloat(result.toPrecision(2))

  if (isNaN(result)) {
    return obj.CULCKRESULT.textContent = 'giv me a string!'
  }

  obj.CULCKRESULT.textContent = result + spaces
  newDiv.textContent = obj.CULCKRESULT.textContent
  
  newDiv.addEventListener('click', () => {
    obj.RESULTIN.removeChild(newDiv)
  })

  obj.RESULTIN.appendChild(newDiv)
}

CULCBT.addEventListener('click', calculation)