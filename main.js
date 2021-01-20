const Array = require('./array')

function main() {

Array.SIZE_RATIO = 3;

const arr = new Array();

arr.push(3)
arr.push(5);
arr.push(19);
arr.push(45);
arr.push(10);

console.log("array length is", arr.length)
console.log("array capacity", arr._capacity)

}

main()