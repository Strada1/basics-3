const calc = (opperator, a, b) => {
  if (
    opperator === 'add' ||
    opperator === '+' ||
    opperator === '-' ||
    opperator === 'subtract' ||
    opperator === 'multi' ||
    opperator === '*' ||
    opperator === 'delit' ||
    opperator === '/' ||
    opperator === 'procent' ||
    opperator === '%'
  ) {
    if (typeof a == 'number' && typeof b == 'number') {
      if (a !== 0 && b !== 0) {
        let result = 0
        switch (opperator) {
          case 'add':
          case '+':
            result = a + b
            break
          case 'subtract':
          case '-':
            result = a - b
            break
          case '*':
          case 'multi':
            result = a * b
            break
          case 'delit':
          case '/':
            result = a / b
            break
          case 'procent':
          case '%':
            result = (a / b) * 100 + '%'
          default:
            'I not know this opperator'
        }
        return result
      } else {
        return 'a or b = 0'
      }
    } else {
      return ' a or b not number'
    }
  } else {
    return 'I not know this opperator'
  }
}

console.log(calc('add', 34, 597)) // 631
console.log(calc('multi', 34, 597)) // 20298
console.log(calc('procent', 450, 67)) // 671.6417910447761%
console.log(calc('delit', 634, 5)) // 126.8
console.log(calc('subtract', 597, 13)) // 584
console.log(calc('*', 597, 13)) // 7761
console.log(calc('+', 597, 13)) // 610
console.log(calc('-', 597, 13)) // 584
console.log(calc('/', 597, 13)) // 45.92307692307692
console.log(calc('%', 450, 67)) // 671.6417910447761%
console.log(calc('-', 0, 24)) // a or b = 0
console.log(calc('-', 34, 0)) // a or b = 0
console.log(calc('&', 0, 24)) // I not know this opperator
