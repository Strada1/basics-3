const phoneBook = {
    list: {
    "Alexander" : 9998887,
    "Yaroslav Shishkin" : 9988776,
    "Ruslan Maroz" : 8877665,
    "Michael Korolev" : 1234567
    },
    
}
for (const name in phoneBook.list) {
console.log((name) + ' ' + (phoneBook.list[name])); 
  }
