class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    details() {
        console.log(this.name);
        console.log(this.age);
    }

    static createId() //cannot be called using an object
    {
        return this.name + '234';
    }
}

class Person1 extends User {
    constructor(name, age, lastname) {
        super(name, age);
        this.lastname = lastname;
    }

    details() {
        console.log("User Details: ");
        console.log(this.name);
        console.log(this.lastname);
        console.log(this.age);
    }
}

const User1 = new Person1('A', 12, "C");

User1.details();
// console.log(User1.createId());//cannot be called as object is calling it
Person1.createId();//both parent and child class can invoke it



const obj = {
    x: 3,
    normal: function () {
        console.log(this);
        this.innerObj.arrow();
        return this.x; //will define the object
    },
    innerObj: {
        arrow: () => {
            console.log("inside arrow function", this);
            return this.x; //will define global
        }
    }
}
console.log("normal Fuctions", obj.normal());

class ABC {
    constructor() {
        this.addEvent(this.abcfunction)

        // this.addEvent()
    }

    abcfunction() {
        console.log("Abc", this);
    }

    /**
      * a callback which will get called on event of click
      * @param {void} abcfunction callback of click
      * @returns {string} string will be returned
      */

    addEvent(abcfunction) {
        window.addEventListener('click', abcfunction);
    }
}

const abc = new ABC();
console.log(typeof NaN);
console.log(isNaN("sbc"))
console.log(isNaN(true))

