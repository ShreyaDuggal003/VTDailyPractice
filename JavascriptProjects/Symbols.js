// let sym1 = Symbol("S1");
// let sym2 = Symbol("S1");

// console.log(sym1==sym2); //two symbols are neveer equal

// console.log(sym1.description);//will print the value inside parenthesis 


//GLOBAL SYMBOLS
// const s1 = Symbol.for("Id");//using Symbol.for it becomes global
// const s2 = Symbol.for("Id");
// const s3 = Symbol.for("Id2");
// const s4 = Symbol("Id3")

// console.log(s1 === s2); // this will give true as by using Symbol.for it became global
// console.log(Symbol.keyFor(s3)); // will print id2 as keyFor is used to print the description for global Symbols
// console.log(Symbol.keyFor(s4)); // will give undefined as not used for non global symbols
// console.log(s3.description); //it can also be used


//ARE USED TO CREATE UNIQUE KEYS
// const k1 = Symbol("Sym1");
// const k2 = Symbol("Sym2");
// const k3 = Symbol("sym3");

// const obj = { [k3] : "123"}; //symbols inside objects are used using square brackets[]
// obj[k1] = "ABC";
// obj[k2] = "DEF";

// obj.k3 = "Hey";
// obj.k4 = "Hi";

// console.log(obj);//will print the objects with symbol
// console.log(obj[k1]); //will print the exact symbol key

// //for in loop ignores symbols
// for (key in obj)
// {
//     console.log(obj[key]); // will print only those keys with dot operation
// }


