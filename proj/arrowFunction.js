
function showVerticalMessage(text) {


	switch (text) {
		case text.toLowerCase():
			text = text[0].toUpperCase() + text.slice(1, 6);
	}

	for (const char of text) {
		console.log(char);

	}




}
showVerticalMessage('strada');


