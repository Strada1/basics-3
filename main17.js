const phoneBook = {
	list: {
		"John": 123456789,
		"Jane Doe": 987654321,
		"Jim Smith": 111111111
	}
};

const fullName = 'Jane Doe'
console.log(phoneBook.list[fullName]); // 987654321

const phoneBook1 = {
	list: {
	  "John": 123456789,
	  "Jane Doe": 987654321,
	  "Jim Smith": 111111111
	},
	add(name, number) { // добавили метод add с параметрами name и number
	  this.list[name] = number; // добавили number в свойство [name] свойства list
	}
  };
  
  phoneBook1.add("Sarah Johnson", 123123123);
  console.log(phoneBook1.list['Sarah Johnson']); // 123123123

  const phoneBook2 = {
	list: {
		"John": 123456789,
		"Jane Doe": 987654321,
		"Jim Smith": 111111111
	}
};

if (phoneBook2.list.John) { // свойство существует
	console.log('John is here!'); // John is here!
}

if (phoneBook2.list.Art) { // свойства не существует
	console.log('Art is here!');
}

console.log(phoneBook2.list.Art); // undefined
console.log("Art" in phoneBook.list); // false
console.log("John" in phoneBook.list); // true
for (const name in phoneBook.list) {
	console.log(name); // John
	console.log(phoneBook.list[name] ); // 123456789
  }
