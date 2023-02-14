

function showVerticaMessage(str){
    if (str.at(0)=='s') {
        console.log('S');
    }
    
    let a=str.length
    if (a>7) {
        console.log(str.at(1));
        console.log(str.at(2));
        console.log(str.at(3));
        console.log(str.at(4));
        console.log(str.at(5));
        console.log(str.at(6));
        
    }
    else{
        for(let char of str){
            console.log(char);
        }

    }
   

}

showVerticaMessage('gaasd')