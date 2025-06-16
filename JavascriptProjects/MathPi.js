// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI) //this won't get overrided

// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI') //writable, enumerable etc properties are false for this
// console.log(descriptor);

const user = {
    name: 'Abc',
    id: 123,
    city: 'asr',
}

console.log(Object.getOwnPropertyDescriptor(user, 'name'))

Object.defineProperty(user, 'name', {
    // writable: false,
    // enumerable: false, //can't be iterated if false
})

console.log(Object.getOwnPropertyDescriptor(user, 'name'))

user.name = "Cde";
console.log(user);


