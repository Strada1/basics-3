     let result;

export function divcreate() {
     
    let save = document.createElement('div');

    document.body.appendChild(save);

    save.style.textAlign = 'center';

    save.textContent = result;

}

    export function calculator() {

       const one = Number(document.getElementById('num1').value);

       const two = Number(document.getElementById('num2').value);

       let operator = document.getElementById('operator');

       switch (operator.value) {
           case '+':
               result = one + two;
           break;
           case '-':
           result = one - two;
           break;
           case '*':
           result = one * two;
           break;
           case '/':
           result = one / two;
           break;

       }
   console.log(result);
}