export function formatFloat(number, countDecimal = 2) {
  return number
    .toFixed(countDecimal)
    .toString()
    .replace(/0*$|\.0*$/, "");
}
