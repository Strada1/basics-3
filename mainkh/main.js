// function calc (a,b,operation){
//  if(operation == 'add'){
//     return a+b
//  } else if(operation=='multi'){
//     return a-b
//  } else if(operation=='cat'){
//     return a*b
//  }


// }

// console.log(calc(2,3,'add'))


function calc (a,b,operation){
    switch (operation){
        case 'add':
            return a+b
            break;
            case 'multi':
                return a/b
                break;
            case 'cat':
                return a-b
                break
    }
   
   }
   
   console.log(calc(2,3,'cat'))
   
   
   