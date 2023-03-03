export { getIndexNum, checkStatus, checkPriority, addTask, changeStatus, deleteTask, showList }

import  { UI, deals } from './44_constants.js'



function getIndexNum(name) {
	const thisDealIndex = deals.findIndex(item => item.name === name)  
		
	if (thisDealIndex === -1) {
		console.log('Такого дела нет в списке!')		
	}	
	return thisDealIndex
}

function checkStatus(status) {
	if (!UI.STATUSES.includes(status)) {
		console.log('Некорректный статус!')	
		return false
	}
	return true
}

function checkPriority(priority) {
	if (!UI.PRIORITY.includes(priority)) {
		console.log('Некорректный приоритет!')	
		return false
	}
	return true
}

function addTask(name, priority, status='In Progress') {    
   
	let start = Date.now();

	try {

		console.log(`Работает addTask(), ${priority}`)
		const myDeal = {}
	
		myDeal['name'] = name
	
		if (!checkStatus(status)) return;
		myDeal['status'] = status
	
		if (!checkPriority(priority)) return;
		myDeal['priority'] = priority
	
		deals.push(myDeal)	

	} catch (e) {

		console.log(e)

	} finally {

		let diff = Date.now() - start;
		console.log(`Затраченное время: ${diff} секунд`)
	}
}

function changeStatus(name, status) {
   
	const thisDealIndex = getIndexNum(name)
	if (thisDealIndex === -1) return;

	if (!checkStatus(status)) return;  // проверяем статус

	deals[thisDealIndex].status = status
	
}

function deleteTask(name) {

	const thisDealIndex = getIndexNum(name)
	if (thisDealIndex === -1) return;

   deals.splice(thisDealIndex, 1)
}

function showList() {

	for (let status of UI.STATUSES) {
		console.log(`${status}:`)
      
		// выводим тире для пустых списков
		const myList = deals.filter(deal => deal.status === status);
		if (myList.length === 0) {
			console.log(`    -`)
		}
		
		deals.forEach(deal => {
			
			if (deal.status === status) {				
				console.log(`    ${deal.name}`)
			}
		})		
	}
}