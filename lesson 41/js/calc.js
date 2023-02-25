export function calcFunc(a, b, sign) {
 if (!(a === undefined || b === undefined)) {
   switch (sign) {
     case "plus":
       return parseFloat(((+a) + (+b)).toFixed(3))
     case "minus":
       return parseFloat((a - b).toFixed(3))
     case 'multiply':
       return parseFloat((a * b).toFixed(3))
     case 'divide':
       if (b === '0') {
         return 'error!'
       } else {
         return parseFloat((a / b).toFixed(3))
       }
     default:
       return 'choose operation'
   }
 } else { 
   if (a === undefined) {
   return 'add number1'
 } else if (b === undefined){
   return 'add number2'
 }    
 }
}

