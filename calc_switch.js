function calc(operation, a, b) {
  switch(operation) {
    case 'add':
      return a + b;
    
    case 'multi':
      return a * b;
      
    case 'subtract':
      return a - b;
    
    default:
      console.log('Вы что вообще ввели?')
  }
}
 
console.log(calc('add', 2, 3)); //5
console.log(calc('multi', 5, 5)); //25
console.log(calc('subtract', 100, 50));//50
calc('abc');//Вы что вообще ввели?
calc();
