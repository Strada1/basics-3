function showVerticalMessage(str) {
    if (typeof str !== "string" || str == "") {
      console.log("Пустая строка:(");
    } else if (str) {
      for (let letter of str[0].toUpperCase() + str.slice(1, 6)) {
        console.log(letter);
      }
    }
  }
  showVerticalMessage("stradalolo");