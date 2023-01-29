const calcul = (opperator, a, b) => {
  if (typeof a == 'number' || typeof b == 'number') {
    if (a !== 0 || b !== 0) {
      let result = 0
      switch (opperator) {
        case 'add':
          result = a + b
          break
        case 'subtract':
          result = a - b
          break
        case 'multi':
          result = a * b
          break
        case 'delit':
          result = a / b
          break
        case 'procent':
          result = (a / b) * 100
        default:
          'I not know this opperator'
      }
      return result
    } else {
      return console.log('a or b = 0')
    }
  } else {
    return console.log(' a or b not number')
  }
}

console.log(calcul('add', 34, 597))
console.log(calcul('multi', 34, 597))
console.log(calcul('precent', 34, 597))
console.log(calcul('delit', 34, 597))
console.log(calcul('sutract', 34, 597))
