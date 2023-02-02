const phoneBook = {
    "John": 123456789, // ключ John со значением 123456789
    "Jane Doe": 987654321,
    "Jim Smith": 111111111
    };

console.log("John:", phoneBook.John);
console.log("Jane Doe:", phoneBook["Jane Doe"]);

phoneBook["Katie Johnson"] = 456789123; 

delete phoneBook["Jane Doe"];

console.log("Katie Johnson:", phoneBook["Katie Johnson"]);
console.log("Jane Doe:", phoneBook["Jane Doe"]);
