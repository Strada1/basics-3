function showVerticalMessage (phrase){
    let sPos = phrase.indexOf('s');
    if(sPos){
        for(let i = sPos-sPos; i<=6&&i<=phrase.length-1;i++){
            console.log(phrase[i]);
        }
    } else{
        console.log(phrase[sPos].toUpperCase());
        for(let i = sPos+1; i<=6&&i<=phrase.length-1;i++){
            console.log(phrase[i]);
        }
    }
    
}
showVerticalMessage('strada');

