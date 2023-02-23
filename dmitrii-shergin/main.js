const submit = document.querySelector('.equals')
submit.addEventListener('click', calculator)

function calculator() {
    const first = Number(document.querySelector('.firstValue').value)
    const second = Number(document.querySelector('.secondValue').value)
    const operator = document.querySelector('.opers').value
    const output = document.querySelector('.result')
    let result = ''

    if (!(isFinite(first) && isFinite(second))) {
        output.textContent = 'error'
        return
    }
    switch (operator) {
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

    result = Number.isInteger(result)
        ? result
        : parseFloat(result).toFixed(2)

    output.textContent = result
}