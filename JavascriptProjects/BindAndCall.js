//CALL
// function setUsername(username)
// {
//     this.username = username;//here this will refer to the obj of user
//     console.log('called')
// }

// function user(username, id, password)
// {
//     setUsername.call(this, username); //will explicitly tells setusername to refer to the obj of this function
//     this.id = id;
//     this.password = password;
// }

// const obj = new user('A', 1, 'abc');
// console.log(obj);




// class ABC{
//     constructor(){
//         this.addEvent(this.abcfunction)
 
//         // this.addEvent()
//     }
 
//     abcfunction() {
//         console.log("Abc", this);
//         // this.def.call(this)
//     }
//     // abcfunction=()=>{
//     //     console.log("Abc", this);
//     // }
 
//     def(){
//         console.log("def");
//     }
   
//    /**
//      * a callback which will get called on event of click
//      * @param {void} abcfunction callback of click
//      * @returns {string} string will be returned
//      */
 
//     addEvent(abcfunction){        
//         window.addEventListener('click', abcfunction);
//     }
// }


// const obj1 = {
//     name:"XYZ",
//     aboutMe:function()
//     {
//         console.log(this.name);
//     }
// } 
// const obj2 = { name:"XYZ45" }

// const f=obj1.aboutMe.bind(obj2);

// f();


const userOne = {name: "A", 
                 age: '20',
                 password: "abcde",
                 
                 details: function()
                 {
                    console.log(`Name is ${this.name}`)
                    console.log(`Age is ${this.age}`)
                    console.log(`Password is ${this.password}`)
                 }                
}

const userTwo = {name: "B",
                 age: 40,
}

// userOne.details();
const details = userOne.details.bind(userTwo); //will bind the object of userTwo in UserOne
userOne.details.call(userTwo); //this will do the same
details();