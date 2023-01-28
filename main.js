// Программа с множеством if
function calc(operation, a, b) {

    if (operation == "add") {
     return a + b;
    }

    if (operation == "multi") {
        return a * b;
    }

    if (operation == "substract") {
        return a - b;
    }
}

let resultCalc = calc ("substract", 3, 2)

console.log (resultCalc)

// Программа calc со switch
function calcSwitch(operation, a, b) {
  switch (operation) {
    case 'add':
      return a + b;
      break;

    case 'multi':
      return a * b;
      break;

    case 'substract':
      return a - b;
      break;
  }

}

let resultCalcSwitch = calcSwitch('multi', 3, 2);

console.log(resultCalcSwitch);
