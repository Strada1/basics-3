function showVerticalMessage(word) {
    if (word.at(0) === 's') {
        let newWord = word[0].toUpperCase() + word.slice(1);
        if (word.length > 7) {
            newWord = newWord.substring(0,7);
            for (key in newWord) {
                console.log(newWord[key]);
            }
        } else {
            for (key in newWord) {
                console.log(newWord[key]);
            }
        }
    } else if (word.length < 7){
        for (key in word) {
            console.log(word[key]);
        }
    }
    if (word.length > 7 && word.at(0) !== 's') {
        let olWord = word.substring(0,7)
        for (key in olWord) {
            console.log(olWord[key]);
        }
    }
}
showVerticalMessage('Strada');