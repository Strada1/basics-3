function showVerticalMessage(str = 'Example', STR_MAX_LENGTH = 7) {
  if (typeof str !== 'string') {
    return console.log('Incorrect type data!');
  }

  let currentStr = str.toLocaleLowerCase().trim();

  if (currentStr.length > STR_MAX_LENGTH) {
    currentStr = currentStr.substring(0, STR_MAX_LENGTH);
  }

  const strUpperCase = currentStr.includes('s')
    ? currentStr[0].toLocaleUpperCase() + currentStr.slice(1)
    : currentStr;

  for (let letter of strUpperCase) {
    console.log(letter);
  }
}

showVerticalMessage('STRADA ');
