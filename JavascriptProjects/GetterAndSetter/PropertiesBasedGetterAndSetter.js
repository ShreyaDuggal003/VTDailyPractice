function User(email, password)
{
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return (this._email).toUpperCase()
        },
        set: function(value){
            this.email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return (this._password)+1234
        },
        set: function(value){
            this.password = value
        }
    })
}

const userOne = new User("a@b.com", 'abcd')
console.log(userOne.email);
console.log(userOne.password);

