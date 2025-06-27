function x() {
    let i = 10;
    return function y() {
        console.log(i);
    }

    // return y;
}

let z = x();
console.log(z); //will give whole function
z(); //will give value

function x() {
    for (let i = 1; i <= 5; i++) //if var i=1 then all values will be 6 as same reference of i
    {
        setTimeout(() => { console.log(i) }, i * 1000);
    }
    console.log("Numbers: ");
}
x();


setInterval
function x() {
    setInterval(() => {
        console.log("hi")
    }, 2000);
}

x();