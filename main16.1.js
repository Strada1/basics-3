const phoneBook = {
    "Alexander" : 9998887,
    "Yaroslav Shishkin" : 9988776,
    "Ruslan Maroz" : 8877665,
    "Michael Korolev" : 1234567
};
console.log(phoneBook)
{
phoneBook["Marina Fr"] = 4567891; // добавить запись Marina Fr
phoneBook["Alexander"] = 2222224; // обновить запись
delete phoneBook["Yaroslav Shishkin"]; // удалить запись
}
console.log(phoneBook)