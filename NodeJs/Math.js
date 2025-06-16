function add(a, b)
{
    return a+b;
}

function sub(a, b)
{
    return a-b;
}

//SINGLE EXPORT
// module.exports = add;

//MULTIPLE EXPORT

//Method 1:
// module.exports = {
//     addFunc : add,
//     subFunc: sub,
// }
// OR
// module.exports = {add, sub}


//Method 2:
// exports.add = (a, b) => a+b;
// exports.sub = (a, b) => a-b;

//Method 3:
module.exports.add = add;
module.exports.sub = sub;
