export function strip(number) {
  return (parseFloat(number.toPrecision(12)));
}

export function checkIsResult(value) {
  if (!isFinite(value)) {
    return 'Error!';
  }

  return isNaN(value) ? 'Error!' : value;
}
