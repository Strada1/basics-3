function showVerticalMessage(Str) {
  console.log(Str[0].toUpperCase());
  for (let letter of Str.slice(1, 7)) {
      console.log(letter);
  }
};
showVerticalMessage('strada');