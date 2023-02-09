function showVerticalMessage(word) {
	if (word[0] == 's') {
		let str = word[0].toUpperCase() + word.slice(1, 6);
		for (let key of str) {
				console.log(key);
		}
	} else {
		for (let key of word.slice(0, 6)) {
			console.log(key);
		}
	}
}
showVerticalMessage('stradamylife');