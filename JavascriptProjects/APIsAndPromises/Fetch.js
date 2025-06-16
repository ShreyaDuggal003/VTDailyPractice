fetch("https://api.mockae.com/fakeapi/users")
.then((response) => {
    const arr = response.json()
    return arr;
})
.then((data) => {
    console.log(data);
    console.log("Data: ", data[0])
    console.log("Data1: ", data[1])
})
.catch((error) => console.log(error))