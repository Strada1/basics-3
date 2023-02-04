
//задача 1

function checkAge(age){
   if(age<18||age<=18)
   {
      console.log('you are not allowed')
   }
   else
   {
      console.log('you are welcome!')
   }

 }
 checkAge(17)
 checkAge(19)

//задача 2

function calc(operation, a, b) {
   if (operation === 'add'){
     return (a + b);
   } else if (operation === 'multi') {
     return (a * b);
   } else if (operation === 'subtract') {
     return (a - b);
   } 
 }
 
 
resultAdd = calc('add', 5, 2);
 console.log(resultAdd);
 
resultMulti = calc('multi', 3, 2);
 console.log(resultMulti);
 
resultSubtract = calc('subtract', 3, 4);
 console.log(resultSubtract);
 
 
 
 
  



