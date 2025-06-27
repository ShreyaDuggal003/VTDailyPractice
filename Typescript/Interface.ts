//PASSING PARAMETERS TOA FUNCTION
function num (a: number, b: string) : void {
    console.log("N: " , a , "S: " , b)
}

num(5, "hi")


//INTERFACE
interface User {
    name: string,
    age: number,
    gender ?: string //ths is optional due to the use of ?
} 

function getData(obj: User) {
    console.log("USER: ", obj)
}

getData({name:"X", age:12, gender:"F"})
getData({name:"Y", age:17})


//EXTENDING INTERFACES
interface Admin extends User{
    email: string
}

function getUserData(obj: Admin){
    console.log("NEWUSER: ", obj)
}

getUserData({name:"Z", age:56, email:"abc@gmail.com"})


//SAME NAME INTERFACE- will get merged into one

interface abc {
    fname: string
}

interface abc {
    lname: string
}

function data (obj: abc)
{
    let name : string = obj.fname + obj.lname //both interfaces merged into one
    console.log("NAME: ", name)
}

data({fname: "John", lname:"Doe"})