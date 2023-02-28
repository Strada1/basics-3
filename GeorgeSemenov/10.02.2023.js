let arr = [1,2,3,4]
arr.forEach(item=>console.log(`Number is ${item}`))

//найдите первое слово длиной больше 7 символов и выведите его в консоль
let arr2 = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
console.log(arr2.find(item=>item.length>7));

let arr3 = [1, 11, -2, 3, -10, 4];
console.log(arr3.filter(item=>item < 0));

let arr4 = [1, 11, -2, 3, -10, 4];
console.log(arr4.map(item=> Math.abs(item)));

let arr5 = [1, 11, -2, 3, -10, 4];
console.log(arr5.sort((a,b)=>b-a));