// Syntax not used that much
const User = {
    _email: 'a@ba.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value;
    }
}

const userOne = Object.create(User);
console.log(userOne.email);
