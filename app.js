function showVerticalMessage(str = 'Example', STR_MAX_LENGTH = 7) {
  if (typeof str !== 'string') {
    return console.log('Incorrect type data!');
  }

  str.toLocaleLowerCase().trim();

  if (str.length > STR_MAX_LENGTH) {
    str = str.substring(0, STR_MAX_LENGTH);
  }

  const strUpperCase = str.includes('s')
    ? str[0].toLocaleUpperCase() + str.slice(1)
    : str;

  for (let letter of strUpperCase) {
    console.log(letter);
  }
}

showVerticalMessage('www');
