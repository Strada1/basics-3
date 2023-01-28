
function calc(operation = 'add' , a = 1, b = 2 ) {
    if (operation === 'add') {
        return a + b
    }
    else if (operation === 'multi') {
        return a * b
    }
    else if (operation === 'subtract') {
        return a - b
    }
    else {
        console.log('oops...')
    }
}
console.log(calc('multi', 10 ,))

let f = 12;

function calcSwitch(operation = 'add' , a = 1, b = 2 ){
    switch (operation){
        case 'add':
            console.log(a + b)
            break
        case 'multi':
            console.log(a * b)
            break
        case 'subtract':
            console.log(a - b)
            break
        default:
            console.log('ops..')
    }

}
calcSwitch('add', 12, 20)