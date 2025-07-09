// Challenge was time restricted but I would account for empty arrays inside the reduce method, if I had to redo it.

function oddOrEven(array) {
if(array.length ===0){
return "even"
}
return array.reduce((acc, item) => acc + item)% 2===0? “even”:“odd”
} 
