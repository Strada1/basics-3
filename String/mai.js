const str = 'styuiop'

if (str[0] === 's' || str[0] === 'S') {
  const string = str[0].toUpperCase() + str.slice(1)
  if (string.length <= 7) {
    for (let i = 0; i < string.length; i++) {
      console.log(string[i])
    }
  } else {
    for (let i = 0; i <= 7; i++) {
      console.log(string[i])
    }
  }
}

if (!(str[0] === 's' || str[0] === 'S')) {
  if (str.length <= 7) {
    for (let i = 0; i < str.length; i++) {
      console.log(str[i])
    }
  } else {
    for (let i = 0; i <= 7; i++) {
      console.log(str[i])
    }
  }
}
