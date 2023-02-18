function buildFun(n){

	var res = []

	for (var i = 0; i< n; i++){
        let fun = function abc() {
            if(i===n-1){
                return n
            }
            else{
                return i
            }
        }
		res.push(fun)
	}
	return res
}
console.log(buildFun(6));