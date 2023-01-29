  
     function calc(operation, a, b) {
     switch(operation) {

        case 'add':
        return a + b;
         
       case 'multi':
        return a * b;

        case 'subtract':
        return a - b;
     }
     
 }

console.log( calc('add',1,5));
console.log(calc('multi',5,5)) 
console.log( calc('subtract',100,50));



