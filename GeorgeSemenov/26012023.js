console.log('program begin');

// function calc(operation,a,b){
//   if(operation == "add") return a + b;
//   else if(operation == "multi") return a*b
//   else if(operation == "substract") return a-b
// }

function calc (operation, a,b){
  switch(operation){
    case "add":
      return a+b;
      //break; бреак писать не нужно, т.к. после return функция прекращается
    case 'multi': return a*b;
    case "substract": return a-b;
  }
}

console.log(`calc(add, 1,2 ) = ${calc('add', 1,2)}`);
console.log(`calc(multi, 1,2 ) = ${calc('multi', 1,2)}`);
console.log(`calc(substract, 2,1 ) = ${calc('substract', 2,1)}`);