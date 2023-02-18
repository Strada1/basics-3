function buildFun(n){
	let res = []
	for (let i = 0; i< n; i++){
        let func = function(){
            console.log(i)
            return i
        }
		res.push(func)
	}
	return res

}

buildFun(10)


function getAverageReduce(marks){
    let sum = marks.reduce((currentSum, currentNumber)=>{
        return currentSum + currentNumber
    },0)
    sum = sum / marks.length
    console.log(Math.round(sum))
    return Math.round(sum)
    
}
getAverageReduce([1,5,87,45,8,8])
getAverageReduce([17,7,15,5,11,4,2,14,7,5])
