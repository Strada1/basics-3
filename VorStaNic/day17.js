const phoneBook = {
    list: {
      "John": 123456789,
      "Jane Doe": 987654321,
      "Jim Smith": 111111111
    },
  };
  
  for (const name in phoneBook.list) {
    console.log(name + ' ' + phoneBook.list[name] ); // "John 123456789"
  }