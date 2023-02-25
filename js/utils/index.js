export function strip(number) {
  return (parseFloat(number.toPrecision(12)));
}

function checkIsResult(value) {
  if (!isFinite(value)) {
    return 'Error!';
  }

  return isNaN(value) ? 'Error!' : value;
}

export function resetFields() {
  firstNumber.value = '';
  secondNumber.value = '';
}
