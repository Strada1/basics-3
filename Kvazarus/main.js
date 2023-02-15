function printNumbersTimeout(from, to) {
    function numOut() {
        if (num != +to) {
            console.log(++num);
            setTimeout(numOut, 1000);
        } 
    }
    
    num = +from - 1;

    if (isNaN(num) || isNaN(+to)) {
        return;
    } else {
        setTimeout(numOut, 1000);
        //numOut();
    }
}

function printNumbersInterval(from, to) {
    num = from;
    const intervalID = setInterval(() => {
        if (num == +to) {
            clearInterval(intervalID);
        }
        console.log(num++);
    }, 1000)
}

printNumbersTimeout(1, 5);