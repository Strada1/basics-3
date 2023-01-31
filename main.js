const address = {
  "city": "New York",
  "street": "Gagarina",
  "houseNumber": 146,
  "apartmentNumber": 66 
};

console.log (address) // all
console.log (address.city) // New York
console.log (address["city", "street"]) // New York Gagarina

const contactBook = { 

  address: {
  "city": "New York",
  "street": "Gagarina",
  "houseNumber": 146,
  "apartmentNumber": 66 
  },

  name: {
    "firstName": "George",
    "secondName": "Obalabama"
  },

  contacts: {
    "phoneNumber": 17850032,
    "telegram": "@geobalabama",
    "twitter": "@suckmusk"
  },

  log () {
    console.log(this.name)
    console.log(this.contacts)
  }

};

contactBook.log()