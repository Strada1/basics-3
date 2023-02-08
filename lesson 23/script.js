const showVerticalMessage = (str) => {
  if (! typeof (str) === 'string') {
    console.log("Error! Enter valid property!");
  }

  const newStr =
    str.startsWith("s") ?
      str[0].toUpperCase() + str.slice(1) :
      str
  for (let char of newStr.substr(0, 6))
    console.log(char);
}

showVerticalMessage('stradalets')