function buildFun(n){

	var res = []

	for (let i = 0; i< n; i++){
		res.push(function(){
          
      return i
      console.log(i)
		})
	}
	return res
}