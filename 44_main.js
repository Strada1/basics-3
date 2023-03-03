import  { deals } from './44_constants.js'

import  { createDeal, renderArray } from './44_view.js'

import  { showList } from './44_operations.js'



// заполняем тудушку из массива
renderArray(deals)

// дополняем тудушку введенным пользователем
const forms = document.forms

for (let form of forms) {
	
	form.addEventListener('submit', (event) => {
		createDeal(event, form.classList[0]);
		showList()
	}) 
};






