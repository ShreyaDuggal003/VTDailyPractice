function createUser(name, score)
{
    this.name = name;
    this.score = score
}

//creating our own prototypes
createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`score is: ${this.score}`);
    
}

const userOne = new createUser("A", 25)
const userTwo = new createUser("B", 5)

userOne.increment();
userOne.printMe()
userTwo.printMe()

