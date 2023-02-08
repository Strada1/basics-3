function verticalMessage(ourWord) {
    for (let char of ourWord){
        console.log(char);
    }; 
};


function upperS(ourWord){
    if (ourWord[0] == 's') {
        let upperWord = ourWord[0].toUpperCase()+ ourWord.slice(1);
        verticalMessage(upperWord);
     } else {
         verticalMessage(ourWord);
    };
};

function sizeWord(ourWord) {
    if (ourWord.length > 7){
        let shortWord = ourWord.slice(0,7);
        upperS(shortWord);
    }  else {
        upperS(ourWord)
    };
};

function showVerticalMessage(ourWord) {
    sizeWord(ourWord);
    console.log('\n');    
};


showVerticalMessage('strada');
showVerticalMessage('Angelina');
showVerticalMessage('stradanie');
