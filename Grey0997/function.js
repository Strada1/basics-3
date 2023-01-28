const add = "add";
const multi = "multi";
const subtract = "subtract";
const divide = "divide" ;
const percent = "percent"

function calc (operation,firstNumber,secondNumber){
    

    if ( isNaN (firstNumber) || isNaN (secondNumber) ){
      return   "Это не число"
    }
    else if (operation === add){
        return firstNumber + secondNumber ;
        
    }else if (operation === multi){
        return firstNumber * secondNumber ;
        
    }else if (operation === subtract){
        return  firstNumber - secondNumber;
        
    }else if ( operation === divide && secondNumber == 0 ){
        return 'Делить на ноль нельзя'

    }else if (operation === divide){
        return firstNumber / secondNumber ;

    }else if (operation === percent){
        return secondNumber * 100 / firstNumber
    }
    
}    
console.log (calc(add,1 ,1))
console.log (calc(multi, 2 , "a"))
console.log (calc(subtract, 1 ,3))
console.log (calc(divide, 2 ,0))
console.log (calc(percent,1000,5))




