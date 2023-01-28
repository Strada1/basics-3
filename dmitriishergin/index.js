const OPERATORS = [`+`, `-`, `*`, `/`, `%`]
const INDEX = Math.floor(0 + Math.random() * OPERATORS.length)
const FIRST_OPERAND = Math.floor(1 + Math.random() * 10)
const SECOND_OPERAND = Math.floor(1 + Math.random() * 10)
const RESULT = calc(FIRST_OPERAND, SECOND_OPERAND, OPERATORS[INDEX])

console.log(RESULT)

function calc(a, b, oper) {
    a = Number(a)
    b = Number(b)
    let error = 'enter a valid value'

    if (isNaN(a) || isNaN(b)) {
        return error
    }

    switch (oper) {
        case '+': {
            return `${a} + ${b} = ${a + b}`
        }
        case '-': {
            return `${a} - ${b} = ${a - b}`
        }
        case '*': {
            return `${a} * ${b} = ${a * b}`
        }
        case '/': {
            return (b === 0)
                ? error
                : `${a} / ${b} = ${(a / b).toFixed(2)}`
        }
        case '%': {
            return (b === 0)
                ? error
                : `${a} % ${b} = ${a % b}`
        }
        default: return error
    }
}

