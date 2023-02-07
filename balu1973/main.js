function showVerticalMessage(str) {
  const firstSymbol = str[0] === "s" ? "S" : str[0];
  str = firstSymbol + str.substring(1, 7);

  for (const char of str) {
    console.log(char);
  }
}

showVerticalMessage("stradasss");
