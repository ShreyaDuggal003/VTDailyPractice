//STRING
// const name = "Shreya";
// const n = new String("Hello"); //another method to declare
// console.log(name[3]);
// console.log(name.length);


//NUMBERS
// const num = 100.99;
// console.log(num.toPrecision(3));// will give numbers to the precision value with round of 

// const nums = 1000000;
// console.log(nums.toLocaleString('en-IN'))// will attach commas like in indian number system (en-IN to convert to INS)

//MATH
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); //will always take the highest value even if value is .2 greater than 4
// console.log(Math.floor(4.9));//will always give the lowest value even number is .9 greater than 4

console.log(Math.floor(Math.random() * 10) + 1)

let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max-min + 1)) + min); // to have random number within range


