//OBJECTS

let fruits = "apple";
let veggies = "abc";

let type = {
    [fruits]: 5,
    [veggies]: 10,
};

console.log(type);

function isUser(name, age) {
    return { name, age };
}

let user = isUser("Shreya", 22);
console.log(user);

let user1 = { 0: "hi", return: "hello" };
console.log(user1);


//MULTI-WORD PROPERTY
let user2 = { name: "John", age: 30, ["like birds"]: false, human: true };

console.log("name" in user);
for (let key in user2) {
    console.log("K: " + key); //key
    console.log(`V: ${user2[key]}`); //value
}


//ORDERING
let obj = { 5: "USA", 8: "India", 6: "Bangla", 1: "Aus" }
console.log(obj); //ordered if key is integer


//NESTED OBJECTS
let obj1 = {
    name: "John",
    cars: { car1: "bmw", car2: "audi" }
};
console.log(obj1.cars.car1);
console.log(obj1["cars"]["car2"]);


//JOIN OBJECTS
let obj2 = { fname: "John", lname: "Doe", age: 30, fullname: function () { return this.fname + " " + obj.lname } };
console.log(obj2);


//CLONING OBJECTS
// let obj = {name: "John"};
// let obj2 = {age: 30};
// let obj3 = {age: 24};
// let obj4 = obj; //copied by reference
// Object.assign(obj, obj2, obj3);
// console.log(obj===obj2);
// console.log(obj === obj4)
// console.log(obj);

// let user = {name: "John", age: 30};
// let clone = Object.assign({}, user);
// user.age = 25;
// console.log(user);
// console.log(clone);


//STRUCTURED CLONING
// let obj = {name: "John",
//                cars: {car1 : "bmw", car2: "audi"}
//     };
// console.log(obj);
// let obj1 = obj;
// let clone = structuredClone(obj);
// obj.cars.car1 = "tesla";
// console.log(obj === obj1);
// console.log(obj === clone);
// console.log(obj1);//changed as orig is changed
// console.log(clone);//no change due to orig


//OPTIONAL CHAINING (can also be done in arrays)
// const user = {name: "John",
//               address: {city: "ABC"}
// };
// console.log(user.address.street.number);//this will show error as street is undefined and we are finding properties of undefined
// console.log(user.address.street?.number);//this will give undefined as evaluation stoppped at street as street was not found



