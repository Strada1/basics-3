const phoneBook = {
    list: {
        "name1": 11111,
        "name2": 22222,
        "name3": 33333,
    },
};

for (const name in phoneBook.list) {
    console.log(name + " - " + phoneBook.list[name]);
};
