const phoneBook = {
    "John": 123456789, 
    "Jane Doe": 987654321,
    "Jim Smith": 111111111
  };
  
phoneBook["Nick"] = 'not available';
phoneBook["Earl Grey"] = 802802802;
phoneBook["Frank"] = 891180101;
phoneBook["Test Delet"] = 123123123;
delete phoneBook["Test Delet"];

console.log(typeof phoneBook);
console.log(phoneBook);
console.log(typeof phoneBook.Nick);
console.log(phoneBook["Nick"])
console.log(typeof phoneBook["Earl Grey"]);
console.log(phoneBook["Earl Grey"]);
