// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// console.log(user);
// delete user.name;

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let sum = 0;
// for (let salary in salaries)
// {
//     sum = sum + salaries[salary];    
// }
// console.log(sum);


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
// function multiplyNumeric(menu)
// {
//     for (let key in menu)
//     {
//         if (typeof (menu[key]) == "number")
//         {
            
//             menu[key] = menu[key] * 2;
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log(menu);


// function Calculator()
// {
//     this.read = function(num1, num2)
//     {
//         this.num1 = num1;
//         this.num2 = num2;
//     }

//     this.sum = function()
//     {
//         return this.num1 + this.num2;
//     }

//     this.mul = function()
//     {
//         return this.num1 * this.num2;
//     }
// }
// let calculator = new Calculator();
// calculator.read(5,5);
// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );


// function Accumulator(startingValue)
// {
//     this.value = startingValue;
//     this.read = function(value)
//     {
//         this.value = this.value+value;
//     } 
// }
// let accumulator = new Accumulator(1); // initial value 1
// accumulator.read(5); // adds the user-entered value
// accumulator.read(5); // adds the user-entered value
// console.log(accumulator.value);