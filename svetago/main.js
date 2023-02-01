const phoneBook = {
    list: {
    "Брат": 79030000001,
    "Игорь": 79180000001,
    "Ира": 79160000001,
    "Надя Н": 79180000002,
    "Папа": 79610000001,
    "Света Т": 79180000003
    },
};
for (const name in phoneBook.list) {
console.log(name);
console.log(phoneBook.list[name]);
}