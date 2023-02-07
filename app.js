function showVerticalMessage(str = 'Example') {
  if (typeof str !== 'string') {
    return 'Incorrect type data!';
  }

  const strUpperCase = str.toLocaleLowerCase().includes('s')
    ? str[0].toLocaleUpperCase() + str.slice(1).trim()
    : str.trim();

  for (let letter of strUpperCase) {
    console.log(letter);
  }
}

showVerticalMessage('strada');
