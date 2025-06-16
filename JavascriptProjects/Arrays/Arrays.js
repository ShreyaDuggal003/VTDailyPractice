//ARRAYS
// let arr = [2,5,3,6,9,5,4,1,7];
// let copy = arr;

// copy.push(10);
// console.log(`Arr: ${arr}`);
// let num = arr.pop();
// console.log(`Copy: ${copy}`);
// arr.shift();
// console.log(`Copy: ${copy}`);
// copy.unshift(10);
// console.log(`Arr: ${arr}`);
// copy.unshift(12);
// copy = copy.sort((a, b) => a- b);
// console.log(`Arr: ${copy}`);


//ARRAY METHODS
// let arr = ['Hi', 'I', 'am'];
// let arr = [1,2,3,6,7,8,9,1];
// let num = [4,5];

// arr.splice(2, 2, "here" );
// console.log(arr);

// // console.log(arr.slice(0,2));
// console.log(arr.concat(num));
// console.log(arr.indexOf(6));
// console.log(arr.lastIndexOf(1));
// console.log(arr.includes(7));
// console.log(arr.includes(5));

// let arr=[{id:1, name: "A"}, {id:2, name: "B"}, {id:3, name: "C"}, {id:1, name: "D"}];
// console.log(arr.findLastIndex(person=> person.id == 1));

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.copyWithin(2, 0));

// let arr = [1,2,3,4];
// let arr2 = arr.map(value => value*5);
// let arr2 = arr.filter(value => value<4);
// let arr2 = arr.reduce((a, b) => a*b);
// let arr2 = arr.every(value => value > 3);
// let arr2 = arr.some(value => value > 3);
// let arr2 = arr.with(2, 6);

// function func(value)
// {
//     return value*5;
// }

// console.log(arr2);

//OPTIONAL CHAINING (can also be done in objects)
// const users = [{name: "A", age: 1}, 
//                {name: "B", age: 2}];
// console.log(users[2].name); // will show error as we are reading properties of undefined
// console.log(users[2]?.name); //will show undefined as evaluation will stop at user[2] because it is undefined