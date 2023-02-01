calc('add', 1, 2);
calc('multi', 1, 2);
calc('subtract', 3, 2);

function calc(operation, a, b){
switch(operation) {
    case 'add':
        console.log("Сложение")
        break;
    case 'multi':
        console.log("Умножение")
        break;
    case 'subtract':
        console.log("Вычитание")
        break;

}
}
calc('add', 1, 2);
calc('multi', 1, 2);
calc('subtract', 3, 2);

let i = 1;
while (i < 20){
    console.log(i)
    i = i + 1;
}

let i = 1;
do {
    console.log(i);
    i = i+1;}
while (i < 20);

for (let i=1; i < 20; i++) {
    console.log(i);
}