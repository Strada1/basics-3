const Book = {
    list: {
    "Anna":  '555',
    "Vika": 1000 , 
    "Nasa": 5555
  },
    delete(name) {
     
      delete Book.list[name] ;
    }
  }; Book.delete ("Anna");
  for (const name in Book.list) {
  
  console.log((name) + '-' + Book.list[name] );
  }