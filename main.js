function showVerticalMessage(String) {
  console.log(String[0].toUpperCase());
  for (let letter of String.substr(1, Infinity)) {
      console.log(letter);
  }
};
showVerticalMessage('Strada');