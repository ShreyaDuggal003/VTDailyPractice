//DEFINING TYPE OF A NUMBER
let a: number = 5

//TUPLE
let b: [string, number] = ["hii", 12]

//ENUM
enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest"
}

console.log(UserRoles.ADMIN)

//ANY
let c;
c = 6;
c = "hii"

console.log(c.toUpperCase()) //can do this if type is any

//UNKNOWN
let d : unknown
d = 7;
d = "hello"

// d.toUpperCase //cannot do this in unknown

//VOID - when function doesn't return something
function abc() : void { 
    console.log("HII")
}

//RETURN - when function return something
function xyz() : number {
    return 1
}


//INTERSECTION TYPES
type value = number | string | null

let val : value = 5
val = "hi"

function cde (obj : value)
{
    //...
}
