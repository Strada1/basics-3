export function saveResult(result, results) {
	const newDiv = document.createElement('div')
	newDiv.textContent = result.textContent
	results.appendChild(newDiv)
	newDiv.addEventListener('click', () => {
		newDiv.remove()
	})
}