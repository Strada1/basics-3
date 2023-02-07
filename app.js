const STR_MAX_LENGTH = 7;

function showVerticalMessage(str = 'Example') {
  if (typeof str !== 'string') {
    console.log('Incorrect type data!');
    return null;
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

showVerticalMessage('strada');
