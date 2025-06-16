//SINGLE EXPORT
// const add = require('./Math')
// console.log(add(5, 6));

//MULTIPLE EXPORT

//Method1:
// const math = require('./Math')
// console.log("Value of math is: ", math.addFunc(2,3), math.subFunc(5,2))
// console.log("Value of math is: ", math.add(2,3), math.sub(5,2))

//Method 2:
// const math = require('./Math')
// console.log("Value of math is: ", math.add(3,5), math.sub(5, 7))

//Method 3:
const {add, sub} = require('./Math')
console.log(add(4,5))
console.log(sub(8,5))