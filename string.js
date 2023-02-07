function showVerticalMessage (text) {
    text = text.substring(0,7)
        if (text.startsWith('s')) {        
            text = text[0].toUpperCase() + text.slice(1)
        } 
    for (let char of text) {
        console.log(char)
    }
}

showVerticalMessage('stradahello')