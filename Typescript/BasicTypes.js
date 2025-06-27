//DEFINING TYPE OF A NUMBER
var a = 5;
//TUPLE
var b = ["hii", 12];
//ENUM
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
})(UserRoles || (UserRoles = {}));
console.log(UserRoles.ADMIN);
//ANY
var c;
c = 6;
c = "hii";
console.log(c.toUpperCase());

