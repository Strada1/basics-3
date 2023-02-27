const btnResult = document.querySelector('.btn-result');
const sign = document.querySelector('.sign');
const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
const outputJS = document.querySelector('.output');

btnResult.addEventListener('click', ()=>{
    const a = Number(number1.value);
    const b = Number(number2.value);
    const operation =sign.value;
    const result = calculate({a, b, operation });
    outputJS.innerHTML=result;
})

const OPERATIONS = {
    sum: '+',
    substract: '-',
    multi: '*',
    division: '/'
};

function calculate ({a, b, operation}) {
    let results = null;
    
    switch(operation) {
        case OPERATIONS.sum:
            results=sum(a,b);
            break;
        case OPERATIONS.substract:
            results=substract(a,b);
            break;
        case OPERATIONS.multi:
            results=multi(a,b);
            break;
        case OPERATIONS.division:
            results=division(a,b);
            break;
    }
    return results;
}

function sum(a,b) {
    return a+b;
}
function substract(a,b) {
    return a-b;
}
function multi(a,b) {
    return a*b;
}
function division(a,b) {
    return a/b;
}
