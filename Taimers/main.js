function printNumber(from, to){
    let current = from;
    
    let timerID = setInterval(function() {
        console.log(current);
        if(current==to){
            clearInterval(timerID);
        }current++;
    }, 1000);
};

printNumber(6,12);

function printNumber1(From, To) {
    let num = From;

    setTimeout(function go() {
        console.log(num);
        if (num<To) {
            setTimeout(go, 1000);
        }num++;
    }, 4000);
};

printNumber1(5,10);