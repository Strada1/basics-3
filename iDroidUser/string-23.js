function showVerticalMessage(word) {
	if (word.startsWith('s')) {
		let str = word[0].toUpperCase() + word.slice(1, 6);
		for (const key of str) {
			console.log(key);
		}
	} else {
		for (const key of word.slice(0,6)) {
			console.log(key);
		}
	}
};

showVerticalMessage('stradalove')