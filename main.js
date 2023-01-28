function calc(a, b, operation) {
 // if (!(typeof (a) == 'number' && typeof (b) == 'number')) {
 //  return 'Ошибочка!'
 // }

 // if (operation == 'add') {
 //  return a + b
 // } else if (operation == 'multi') {
 //  return a * b
 // } else if (operation == 'subtract') {
 //  return a - b
 // } else {
 //  return 'Ошибочка!'
 // }

 if (!(typeof (a) == 'number' && typeof (b) == 'number')) {
  return 'Ошибочка!'
 }

 switch (operation) {
  case 'add':
   return a + b;
  case 'multi':
   return a * b;
  case 'subtract':
   return a - b;
  default:
   return 'ошибочка'
 }
}

const result = calc(5, 4, 'multi')

console.log(result)
