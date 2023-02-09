function showVerticalMessage1(message){
    if (message.length<2||message.length>20){
        console.log('Слово должно быть от 2 до 20 символов!');
    } else if(message.length<8&&message.startsWith("s")){
        console.log( message[0].toUpperCase() );
        for (let char of message.slice(1)) {
            console.log(char); 
        };
    }else if(message.length<7){
        for (let char of message) {
            console.log(char); 
        };
    }else if(message.length>7&&message.startsWith("s")){
        console.log( message[0].toUpperCase() );
        for (let char of message.slice(1,7)) {
            console.log(char); 
        };
    }else if(message.length>7){
        for (let char of message.slice(0,7)) {
            console.log(char); 
        }
    }else{
        console.log('error, please try again another type')
    };       
};
showVerticalMessage1('stradalec');
