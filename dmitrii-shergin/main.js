import { EQUALS, CALC, OPERATOR, OUTPUT, FIRST_STRING, SECOND_STRING } from './nodes.js'

function calculator() {
    const first = Number(FIRST_STRING.value)
    const second = Number(SECOND_STRING.value)
    const previous = document.createElement('div')
    previous.classList = 'previous'
    let result = ''

    switch (OPERATOR.value) {
        case '+': {
            result = first + second
            break
        }
        case '-': {
            result = first - second
            break
        }
        case '*': {
            result = first * second
            break
        }
        case '/': {
            result = first / second
            break
        }
    }
    if (!Number.isInteger(result)) {
        result = parseFloat(result).toFixed(2)
    }
    OUTPUT.textContent = result
    previous.textContent = result

    CALC.insertAdjacentElement('afterEnd', previous)
    previous.addEventListener('click', function () {
        this.remove()
    })
}
EQUALS.addEventListener('click', calculator)