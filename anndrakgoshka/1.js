function showVerticalMessage(str) {
	
		if (str[0] == 's') {
		str = str[0].toUpperCase() + str.slice(1, 7)
		for (let key of str) {
			console.log(key)
		}
	} else {
		str = str.slice(0, 7)
		for (let key of str) {
			console.log(key)
	}
	}
}

showVerticalMessage('rtradafdfqewq')