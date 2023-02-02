const phoneBook = {
    list: {
        'Petya': 87292454647,
        'Dasha': 87292131415,
        'Katya': 95423413114,
        'Nasty': 89991342345,
        'Anna' : 44888142434
    }
};


for (const name in phoneBook.list){
    console.log(name + ' - ' + phoneBook.list[name]);
}
