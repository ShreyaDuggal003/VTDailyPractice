//REST OPERATOR (...)
// function calc(num) //this will print only a single value 100
// {
//     return num;
// }

// function calc(...num) //this will give array of all the values
// {
//     return num
// }

function calc(val1, val2, ...num) //this will give array starting from 500 because the first two values are taken by val1 and val2
{
    return num;
}

console.log(calc(100, 2000, 500, 200, 1000)); 
