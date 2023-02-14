// Create my phonebook 
telegramBook = {
	"Alex": 85623239011,
	"Michael": 87623269011,
	"Jim": 89923269066,
};

// Add new contact
telegramBook.Grif = 81023269052
console.log('Add Grif: ')
console.log(telegramBook);

// Update a contact
console.log("Update Jim's phone: ")
telegramBook["Jim"] = 87623269022
console.log(telegramBook);

// Delete a contact
console.log("Delete Michael's phone: ")
delete telegramBook["Michael"]
console.log(telegramBook);
