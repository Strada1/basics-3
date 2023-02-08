function showVerticalMessage(str){
	if(str[0] === 's'){
		str = str[0].toUpperCase() +  str.slice(1,7);
		for(let char of str){
			console.log(char);
		}
	}else{
		str = str.slice(0,7);
		for(let char of str){
			console.log(char);
		}
	}
}

showVerticalMessage('strada');

console.log(`\n`);

showVerticalMessage('1234567890');