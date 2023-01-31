const phoneBook = {
    "Scottie": 222333444,
    "Dennis Rodman": 222333555,
    "Michael": 222333666,
    "Horace Grant": 222333777,
    "Bob Love": 222333888,
    "Reginald": 222333999
};  
phoneBook["Zach Lavine"] = 333444555;
phoneBook["Michael"] = 777777777;
delete phoneBook["Dennis Rodman"];
console.log(phoneBook);
console.log(phoneBook.Michael);
console.log(phoneBook["Bob Love"]);