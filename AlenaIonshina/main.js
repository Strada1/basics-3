//объявляем функцию culk
function calc (operation, a, b){
    switch (operation){
        case 'add':
            return a + b;
            break;
        case 'multi':
            return a * b;
            break;
        case 'subtract':
            return a - b;
            break;  
        default:
            console.log('operation dont found') ;         
    }
}
calc('add', 1, 2)
calc('multi', 1, 2)
calc('subtract', 3, 2)
