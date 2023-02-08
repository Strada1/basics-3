const showVerticalMessage = (str) => {
  str[0] === 's' || 'S' ? str = str[0].toUpperCase() + str.slice(1) : str
  if (str.length > 7) {
    let smalStr = str.substr(0, 7)
    for (i = 0; i < smalStr.length; i++) {
      console.log(k.at([i]));
    }
  } for (i = 0; i < str.length; i++) {
    console.log(str.at([i]))
  }
}

showVerticalMessage('strada')

