function buildFun(n){
	let res = []
	for (let i = 0; i<= n; i++){
		res.push(function f1(){
			//console.log(i);
            return i;
		})
	}
	return res;
}
const num = 9
let x = buildFun(num);
function myFun(n) {
    for (let j = 0; j <= n; j++) {
    console.log(x[j]())
    }
}
myFun(num);

