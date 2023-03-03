import  { getIndexNum, checkStatus, checkPriority, addTask, changeStatus, deleteTask, showList } from './44_operations.js'

import  { UI, deals } from './44_constants.js'

export { createNewDiv, render, createDeal, renderArray }



function delDev(textDeal, deals, newDiv, buttonDel) {
	deleteTask(textDeal.innerText)
	renderArray(deals) 
	// showList()
	newDiv.remove()
	buttonDel.removeEventListener('click', delDev)
}

function markCheckbox(newDiv, textDeal) {
	newDiv.classList.toggle('done_deal')
	changeStatus(textDeal.innerText, 'Done')
	showList()
}

function createNewDiv() {

	// новый див для дела
	const newDiv = document.createElement('div')
	newDiv.classList.add('deal_item', 'bordered')
	
	// имя 
	const textDeal = document.createElement('p')		
	
	// статус
	const doneCheckbox = document.createElement('input')
	doneCheckbox.type = 'checkbox'

	// кнопка удаления из списка и отображения
	const buttonDel = document.createElement('button')
	buttonDel.innerText = 'X'
	buttonDel.classList.add('btn')

	newDiv.append(doneCheckbox)
	newDiv.append(textDeal)
	newDiv.append(buttonDel)

	return {newDiv, doneCheckbox, textDeal, buttonDel}
}

function render(newDiv, doneCheckbox, textDeal, buttonDel, category) {

	// console.log('Работает render()')
	// смена статусе по клику
   doneCheckbox.addEventListener('click', () => markCheckbox(newDiv, textDeal))

	// удаление по кнопке
	buttonDel.addEventListener('click', () => delDev(textDeal, deals, newDiv, buttonDel))

	// вставка в документ
	const input_add = document.querySelector(`.${category}`)
	input_add.after(newDiv)

}

function createDeal(event, category) {

	// console.log('Работает createDeal()')

	event.preventDefault();

	// создаем каркас для нового элемента
	const {newDiv, doneCheckbox, textDeal, buttonDel} = createNewDiv()

	// получаем текст из инпута
	const input_add = document.querySelector(`.${category}_add`)

	// заполняем название дела
	textDeal.innerText = input_add.value  

	// после вставки - внесение в список дел
	addTask(textDeal.innerText, category)
	renderArray(deals)

	// очищение инпута
	input_add.value = ''
}

function renderArray(deals) {  

	// console.log('Работает renderArray()')
	
	// очищаем ДОМ
	const currentDeals = document.querySelectorAll('.deal_item')
	currentDeals.forEach((item) => {
		item.remove()
	});   
   
	deals.forEach((item) => {    

		// создаем каркас для нового элемента
		const {newDiv, doneCheckbox, textDeal, buttonDel} = createNewDiv()
		
		if (item.status === 'Done') {
			doneCheckbox.checked = true;
			newDiv.classList.add('done_deal')
		}	

		// заполняем каркас данными
	   render(newDiv, doneCheckbox, textDeal, buttonDel, item.priority)

		// заполняем название дела
		textDeal.innerText = item.name 
	}) 
}
