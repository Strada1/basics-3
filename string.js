function showVerticalMessage (text) {
    if (typeof(text) !== 'string') {
        console.log('Wrong type of value')
    } else {
        text = text.substring(0,7)
            if (text.startsWith('s')) {        
                text = text[0].toUpperCase() + text.slice(1)
            } 
        for (let char of text) {
            console.log(char)
        }
    }
}

const testValue = '3'
showVerticalMessage(testValue)