
// function calc(operation, a, b) {
//    switch (operation) {
//       case 'add':
//          alert(a + b);
//          break;
//       case 'multi':
//          alert(a * b);
//          break;
//       case 'subtract':
//          alert(a - b);
//          break;
//       default:
//          alert('Вот-те на...');
//    }

// }




// let i = 1;
// while (i < 20) {
//   console.log(i)
//   i = i + 1;
// }
// node main.js
// phoneBook["Jim Smith"] = 2414

// const phoneBook = {
//    "John": 123456789, // ключ John со значением 123456789
//    "Jane Doe": 987654321,
//    "Jim Smith": 111111111
//  };

 
//  console.log(phoneBook)


// const phoneBook = {
//   list: {
//     "John": 123456789,
//     "Jane Doe": 987654321,
//     "Jim Smith": 111111111
//   },
//   add(name, number) { // добавили метод add с параметрами name и number
//     this.list[name] = number; // добавили number в свойство [name] свойства list
//   },
//   del(names) {
//     delete this.list[names];
//   }
// };

// phoneBook.add("Olechka", 123 );
// // console.log(phoneBook.list['Olechka']); // 123123123
// phoneBook.del('John')
// console.log(phoneBook)


const phoneBook = {
  list: {
    "John": 123456789,
    "Jane Doe": 987654321,
    "Jim Smith": 111111111
  },
};

for (const name in phoneBook.list) {
  console.log(name + ' - ' + phoneBook.list[name]); // John
  // console.log(phoneBook.list[name] ); // 123456789
}