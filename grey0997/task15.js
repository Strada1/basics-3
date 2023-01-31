const phoneBook = {
  list: {
    Snezhna: 1111111111,
    Sergey: 222222222,
    Svetlana: 333333333,
    Aleksandr: 44444444,
  },
};

phoneBook.list.Mama = 9999999999;
delete phoneBook.list.Snezhna;
console.log(phoneBook); 
