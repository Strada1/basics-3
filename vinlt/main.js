const input = document.getElementById("highInput")
const button = document.getElementById("button")
const firstName = document.getElementById("highInput").value
const serverUrl = 'https://api.genderize.io'

function add() {
	(async () => {	
	const url = `${serverUrl}?name=${document.getElementById("highInput").value}`;	
	let getServer = await fetch(url)
	let getJson = await getServer.json()
	if(getJson.name) {
		alert(` ${getJson.name} is ${getJson.gender}  `)
	}
	console.log(getJson)
	})()
	
}


button.addEventListener('click', add)







let a = document.getElementById("inTo").value
const buto = document.getElementById("butTo")

function add1() {
	console.log(a)
}

buto.addEventListener('click', add1)