function printNumber(from, to){
    let current = from;
    
    let timerID = setInterval(function() {
        console.log(current);
        if(current==to){
            clearInterval(timerID);
        }current++;
    }, 2000);
};

printNumber(5,7);

function printNumber1(from1, to1) {
    let number = from1;

    let timerID1 = setTimeout(function go() {
        console.log(number);
        if (number<to1) {
            setTimeout(go, 1000);
        }number++;
    }, 1000);
};

printNumber1(2,5);