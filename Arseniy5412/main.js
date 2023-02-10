let arr = [1, 2, 3, 4, 5];

arr.forEach(number => {
    console.log(`Number is ${number}`)
});


let arr2 = ['cat', 'dog', 'elephant', 'tiger', 'lion'];

for (let i = 0; i < arr2.length; i++) {
        if (arr2[i].length > 7) {
            console.log(arr2[i]);
        }
}


let arr3 = [1, 11, -2, 3, -10, 4];

let negativeNumber = arr3.filter(number => number < 0);
console.log(negativeNumber);

let arr4 = [1, 11, -2, 3, -10, 4];

let absoluteNumber = arr4.map(number => Math.abs(number));

console.log(absoluteNumber);


const numbersForSort = [1, 11, -2, 3, -10, 4];
const sortedNumbers = numbersForSort.sort((a,b) => a-b);
console.log(sortedNumbers);