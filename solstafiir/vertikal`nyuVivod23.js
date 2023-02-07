function showVerticalMessage(word) {
  if (typeof word !== "string" || word == "") {
    console.log("empty string:(");
  } else if (word) {
    for (let letter of word[0].toUpperCase() + word.slice(1, 6)) {
      console.log(letter);
    }
  }
}
showVerticalMessage("stradaem");
