

const add = "+" ;
const multi = "*" ;
const subtract = "-" ;
const divide = "/" ;
const percent = "%" ;
const exponentiation = '**' ;

const firstNumber = +prompt ('введите первое число ');
const secondNumber = +prompt ("введите второе число");
const operation = prompt("введите математический символ (+ - / * % **) ");


if ( isNaN (firstNumber) || isNaN (secondNumber) ){

    alert  ("Это не число")

}else if (operation === divide && secondNumber === 0 ){

    alert ("делить на 0 нельзя")

    
}else {

switch (operation) {

    case add :

        alert (firstNumber + secondNumber)

    break;

    case multi :

        alert(firstNumber * secondNumber)

    break;

    case subtract :
        
        alert(firstNumber - secondNumber)

    break;

    case divide :
        
        alert(firstNumber / secondNumber)

    break;
        
        
    case percent :
            
        alert(secondNumber * 100 / firstNumber)

    break;
            
    case exponentiation :
                
        alert(firstNumber ** secondNumber)

    break;
                
    case сheckZero :
                
        alert("делить на ноль нельзя ")

    break;
               
    default:

        alert( 'Неизвестное значение' );    
                    
    
}

}
