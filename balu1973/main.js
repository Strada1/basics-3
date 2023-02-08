function showVerticalMessage(str) {
  if (!str || typeof str !== "string" || str.trim() === "") {
    console.log("неверные входные данные!");
    return;
  }

  str = str.trim();
  const MAX_LENGTH_STRING = 7;
  const SEARCH_LETTER = "s";
  const firstLetter = (str[0] === SEARCH_LETTER) ? str[0].toUpperCase() : str[0];

  str = firstLetter + str.substring(1, MAX_LENGTH_STRING);
  for (const char of str) {
    console.log(char);
  }
}

showVerticalMessage("stradasss");
console.log("------");
showVerticalMessage("trada");
console.log("------");
showVerticalMessage("a");
console.log("------");
showVerticalMessage("   ");
console.log("------");
showVerticalMessage(null);
console.log("------");
showVerticalMessage(22);
console.log("------");
showVerticalMessage(undefined);
console.log("------");
showVerticalMessage(NaN);
