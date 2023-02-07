let sum = (a, b) => a + b;
console.log( sum(1, 2) ); // 3

const fillArr = (numElements) => {
    const arr = [];
    for (let i = 0; i < numElements; i++) {
      arr.push(parseInt(Math.random() * 10));
    }
    return arr;
  };
  
  // вызов функции fillArr
  console.log(fillArr(5)); // [1, 4, 6, 4, 9(Случайные числа)

