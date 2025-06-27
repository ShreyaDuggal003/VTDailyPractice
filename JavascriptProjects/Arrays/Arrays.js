//ARRAYS
let arr1 = [2, 5, 3, 6, 9, 5, 4, 1, 7];
let copy = arr;

copy.push(10);
console.log(`Arr: ${arr}`);
let num1 = arr.pop();
console.log(`Copy: ${copy}`);
arr.shift();
console.log(`Copy: ${copy}`);
copy.unshift(10);
console.log(`Arr: ${arr}`);
copy.unshift(12);
copy = copy.sort((a, b) => a - b);
console.log(`Arr: ${copy}`);


//ARRAY METHODS
let arr2 = ['Hi', 'I', 'am'];
let arr3 = [1, 2, 3, 6, 7, 8, 9, 1];
let num = [4, 5];

arr2.splice(2, 2, "here");
console.log(arr2);

console.log(arr3.slice(0, 2));
console.log(arr3.concat(num));
console.log(arr3.indexOf(6));
console.log(arr3.lastIndexOf(1));
console.log(arr3.includes(7));
console.log(arr3.includes(5));

let arr4 = [{ id: 1, name: "A" }, { id: 2, name: "B" }, { id: 3, name: "C" }, { id: 1, name: "D" }];
console.log(arr4.findLastIndex(person => person.id == 1));

let arr5 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr5.copyWithin(2, 0));

let arr6 = [1, 2, 3, 4];
let a1 = arr6.map(value => value * 5);
let a2 = arr6.filter(value => value < 4);
let a3 = arr6.reduce((a, b) => a * b);
let a4 = arr6.every(value => value > 3);
let a5 = arr6.some(value => value > 3);
let a6 = arr6.with(2, 6);

// function func(value)
// {
//     return value*5;
// }

// console.log(arr2);

// OPTIONAL CHAINING (can also be done in objects)
const users = [{ name: "A", age: 1 },
{ name: "B", age: 2 }];
console.log(users[2].name); // will show error as we are reading properties of undefined
console.log(users[2]?.name); //will show undefined as evaluation will stop at user[2] because it is undefined