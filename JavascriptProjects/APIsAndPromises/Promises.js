const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Promise One')
        resolve()
    })
})

promiseOne.then(function() {
    console.log('Promise resolved')
})


new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Promise Two')
        resolve()
    })
}).then(function() {
    console.log('Promise resolved')
})


new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Promise Three')
        resolve({name:'A', age:'20'})
    })
}).then(function(user) {
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; //if error false then promise will be resolved
        if(!error)
        {
            resolve({username: "ABC", id: 123, password: 'abc'})
        }
        else
        {
            reject("Error...something went wrong")
        }
    })
})

promiseFour.then(function(user) {
    console.log(user);
    let arr = [];
    arr.push(user.username);
    arr.push(user.id);
    return arr;

}).then(function(arr) {
    console.log(arr[0]);

    return arr[1]

}).then(function(id) {
    console.log(id);

}).catch(function(error) {
    console.log(error);

}).finally(() => console.log("Promise either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; //if error false then promise will be resolved
        if(!error)
        {
            resolve({username: "ABC", id: 123, password: 'abc'})
        }
        else
        {
            reject("Error...something went wrong")
        }
    })
})

async function consumePromiseFive() 
{
    try
    {
        const response = await promiseFive;
        console.log(response)
    }
    catch(error)
    {
        console.log(error);
    }
}

consumePromiseFive();


// async function getAllData() 
// {
//     try {
//         const response = await fetch ('https://api.github.com/users/theshreyaduggal')
//         const data = await response.json();
//         console.log(data)
//     } 
//     catch (error) {
//         console.log("E: " , error);    
//     }
// }
// getAllData()


fetch("https://api.github.com/users/theshreyaduggal")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))