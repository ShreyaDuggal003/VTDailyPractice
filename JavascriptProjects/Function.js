//FUNCTION
// function getMin(num1, num2)
// {
//     if (num1 < num2)
//     {
//         return num1;
//     }

//     return num2;
// }

// function getPow(num1, num2)
// {
//     return num1**num2;
// }

// let ans = getMin(21,5);
// let result = getPow(2, 4);

// console.log(result);
// console.log(ans);


//FUNCTION EXPRESSION
// let sayHi = function() {
//     console.log("O");
//   };
// function test(sayHi)
// {
//    sayHi();
// }
// test(sayHi);


//ARROW FUNCTION
// function ask(Question, yes, no)
// {
//     if(confirm(Question))
//     {
//         yes();
//     }
//     else
//     {
//         no();
//     }
// }

// ask(
//     "Do you agree?",
//     () => alert("You agreed"),
//     () => alert("You denied")
// );


//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS IIFE
// (function x() //this is named IIFE
// {
//     console.log("Hi");
// }) ();

// (() => console.log("Heyy")) ()

// ((name) => console.log(`${name}`)) ("Heyy");


//FIRST CLASS FUNCTIONS
// var b = function(func) 
//         {
//             console.log(func)
//             func()
//             console.log('b called')
//         }

// b(function abc()  //function passed as argument
// {
//     console.log("abc called")
// })

var b = function()
        {
            console.log('b called')
            return function xyz() //function can be retured also
                    {
                        console.log ('xyz called');
                    }
        }

console.log(b());
let z = b();
z();
