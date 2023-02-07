function showVerticalMessage(str) {
  let newStr = str[0].toUpperCase() + str.slice(1);
  if (newStr.length>6)
  newStr=newStr.substr(0,6);
  for (let char of newStr) {
    console.log(char);
}
}
showVerticalMessage ('strada eto ya');