function mincost(arr)
{ 
//write your code here
// return the min cost
	let res = 0
	let array = arr.sort((a,b)=>a-b)
	while(array.length>1){
		let a = array.shift()
		let b = array.shift()
		res = a+b
		
		
	}

	return res
  
}

module.exports=mincost;
