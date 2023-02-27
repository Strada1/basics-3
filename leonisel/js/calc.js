export function calc(operation, a, b) {
  if(!isFinite(a) || !isFinite(b) || a === '' || b === '') {
    return 'введите число';
  }
  if(operation === 'division' && b === 0) {
    return 'на 0 делить нельзя';
  }
  if(!operation) {
    return 'выберите оператора';
  }
  const aNum = Number(a);
  const bNum = Number(b);

  switch(operation) {
    case 'add':
      return aNum + bNum;
    case 'multi':
      return aNum * bNum;
    case 'subtract':
      return aNum - bNum;
    case 'division':
      return aNum / bNum;
  }
}