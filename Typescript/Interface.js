//PASSING PARAMETERS TOA FUNCTION
function num(a, b) {
    console.log("N: ", a, "S: ", b);
}
num(5, "hi");
function getData(obj) {
    console.log("USER: ", obj);
}
getData({ name: "X", age: 12, gender: "F" });
getData({ name: "Y", age: 17 });
function getUserData(obj) {
    console.log("NEWUSER: ", obj);
}
getUserData({ name: "Z", age: 56, email: "abc@gmail.com" });
function data(obj) {
    var name = obj.fname + obj.lname;
    console.log("NAME: ", name);
}
data({ fname: "John", lname: "Doe" });
