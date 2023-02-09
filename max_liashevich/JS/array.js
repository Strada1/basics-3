let cookers = ['Alisher', 'Muslim', 'Andrey'];

cookers[0] = 'Pushkin';
cookers[1] = 'Uebok';
cookers[3] = 'Petushara';

console.log(cookers.length);
console.log(cookers);

let arr = ['Petushara', 
            'Igorek',
            function petuh() {console.log('oreshkin-suka')},
          ];

arr.pop();
arr.push('Putin', 'Shoigu');
console.log(arr);
arr.shift();
arr.unshift('Ssiklo', 'Net');
// arr.shift();
console.log(arr);



// ------------------------------------
// ------------------------------------
// ------------------------------------
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log( fruits.length ); // ?
console.log(fruits);
// ------------------------------------
// ------------------------------------
// ------------------------------------
let styles = ["Jazz", "Blues"];

styles.push('Rock-n-roll');
console.log(styles.length);
console.log(styles[Math.floor((styles.length - 1) / 2)]);
styles[Math.floor((styles.length - 1) / 2)] = "Classic";
styles.shift();
styles.unshift('Rap', 'Raeggi')
console.log(styles);

// ------------------------------------
// ------------------------------------
// ------------------------------------

function sumInput() {
  const arr = [];

  while (true) {
    const number = prompt('введите число: ', '');
    
    if (number === null || number === '' || isNaN(number)) break;
    
    arr.push(Number(number));
  }
  
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  
  return sum;
}

console.log(sumInput());


// ------------------------------------
// ------------------------------------
// ------------------------------------
function getMaxSubSum(arr) {
  let maxSum = 0; 

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

console.log( getMaxSubSum([-2, 32, -53, 159]) ); //