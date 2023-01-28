function calcSwitch (a, b, operation) { // задача страда. переписал иф на свитч
    switch (operation) {
        case 'add':
            return Number(a) + Number(b);
        case 'multu':
            return Number(a) * Number(b);
        case 'subtract':
            return Number(a) - Number(b);
        default:
            return 'invalid operation'
    }
}

let consolResult = calcSwitch(1,2, 'add1');
console.log(consolResult);


let browser = 'Edge';
function checkBroser(a) { // задача с learnjs. переписал свитч на иф
    if (a ==='Edge') {
        console.log('You have got the Edge!');
    }
    else if (a === 'Chrome' || a === 'Firefox' || a === 'Safari' || a === 'Opera') {
        console.log('Okay we support these browser too');
    }
    else {
        console.log('We hope that this page look ok');
    }
}

checkBroser(browser);
browser = 'Yandex';
checkBroser(browser);
browser = 'Chrome';
checkBroser(browser);