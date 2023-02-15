function printNumber(from,to){
    let current = from;
    setTimeout(function start(){
        console.log(current);
        if(current<to){
            setTimeout(start,500)
        }
        current++
    },100)
}

printNumber(1,10)