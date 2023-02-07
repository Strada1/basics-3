function showVerticalMessage(str = 'Example') {
  if (typeof str !== 'string') {
    throw new Error('Incorrect type data!');
  }

  const strWithUpperCaseLetter = str.toLocaleLowerCase().includes('s') ?
    str[0].toLocaleUpperCase() + str.slice(1) :
    str

  for (let letter of strWithUpperCaseLetter.trim()) {
    console.log(letter);
  }
}

showVerticalMessage('strada');
