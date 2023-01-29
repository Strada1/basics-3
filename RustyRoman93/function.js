// 11.Функции

function checkAge (age =18){  
  return age<18 ? 'you are not allowed' : 'you are welcome';
}
const result = checkAge(19);
console.log(result);


function calc(operation,a,b){
  if(operation==='add'){return a+b;
  } else if (operation==='multi'){return a*b;
  } else if (operation==='subtract'){return a-b;}
  }
  const addResult = calc('add',1,2);
  const multiResult = calc('multi',1,2);
  const substractResult = calc('subtract',3,2)
  console.log(addResult);
  console.log(multiResult);
  console.log (substractResult);

  // Switch
  
  function calc(operation,a,b){
    switch (operation) {
       case 'add' :
          return a*b ;
       case 'multi' : 
         return a*b ;
       case 'subtract':
        return  a-b ;
       }
   }
   const addResult = calc('add',1,2);
   const multiResult = calc('multi',1,2);
   const substractResult = calc('subtract',6,2)
   console.log(addResult);
   console.log(multiResult);
   console.log (substractResult);


  
    