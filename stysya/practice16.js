const phoneBook = {
    "Sasha": 123456789,
    "Katya": 0987654321,
    "Kira": 875841439
}
console.log(phoneBook);

phoneBook["Katya"] = 67578284754
console.log(phoneBook["Katya"]);

phoneBook["Pasha"] = 78578143413;
delete phoneBook["Kira"];
console.log(phoneBook);
console.log(phoneBook.Sasha)
