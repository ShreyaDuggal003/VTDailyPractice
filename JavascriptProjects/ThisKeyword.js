// const obj = {
//     x: 3,
//     normal: function () {
//         console.log(this); //will refer to object
//         this.innerObj.arrow();
//         return this.x;
//     },
//     innerObj : {
//         arrow: () => {
//             console.log("inside arrow function",this); //will refer to global
//             return this.x;
//         }
//     }
// }
// console.log("normal Fuctions", obj.normal());
 
// class ABC{
//     constructor(){
//         this.addEvent(this.abcfunction)
 
//         // this.addEvent()
//     }
 
//     abcfunction() {
//         console.log("Abc", this);
//     }

//     abc = () => { console.log ("ABC2: " , this)}
   
//    /**
//      * a callback which will get called on event of click
//      * @param {void} abcfunction callback of click
//      * @returns {string} string will be returned
//      */
 
//     addEvent(abcfunction){
//         window.addEventListener('click', abcfunction);
//     }
// }
 
const obj1 = new ABC()
obj1.abcfunction();
obj1.abc()

// const obj={
//     name:"xyz",
//     about:()=>{
//         console.log("Inside arrow function",this);
//     },
//     aboutMe :function(){
//         console.log("Inside normal function",this);
//     }
// }
 
// class Student{
//     constructor(name){
//         this.name=name;
//     }
 
//     about=()=>{
//         console.log("Inside arrow function",this);
//     }
//     aboutMe(){
//         console.log("Inside normal function",this);
//     }
// }
 
 
// const student=new Student("xyz");
// obj.about();
// obj.aboutMe();
 
// student.about();
// student.aboutMe();
 
 