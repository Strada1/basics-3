const number_1 = document.querySelector ('.number_1');
const number_2 = document.querySelector ('.number_2');
const js_select = document.querySelector ('.js_select');
const buttonResult = document.querySelector ('.js_result');
const output = document.querySelector ('.js_output');


const OPERATIONS = {
    summation:"addition",
    subtraction:"subtraction",
    multiplication:"multiplication",
    division:"division",
}

function calculate (a, b, operation){
    let conclusion = 0;

   switch (operation) {
    case OPERATIONS.summation:
       conclusion = a + b; 
        break;

    case OPERATIONS.subtraction:
        conclusion = a - b;
        break;

    case OPERATIONS.multiplication:
        conclusion = a * b;
        break;

    case OPERATIONS.division:
        conclusion = a / b;
        break;
    
   
    default:
        break;
   }
   return conclusion;
}

buttonResult.addEventListener ('click', function (){
    const a = Number(number_1.value);
    const b = Number(number_2.value);
    const operation = js_select.value;

    const conclusion = calculate (a,b,operation);

    output.innerHTML = conclusion;

})