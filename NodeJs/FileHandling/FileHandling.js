const fs = require("fs");

//WRITE FILE
// fs.writeFileSync("./text.txt", "Hello") //Synchronous + will return something

// fs.writeFile("./text.txt", "Hello Worlddd", (err)=>{}) //Asynchronous + never returns anything


//READ FILE
// let result = fs.readFileSync("./FileHandling/Contact.txt", 'utf-8') //Synchronous + will return something
// console.log(result)

// fs.readFile("./FileHandling/Contact.txt", 'utf-8', (err, result) => { //Asynchronous + never returns anything
//     if (err)
//     {
//         console.log("Error: ", err);        
//     }
//     else
//     {
//         console.log(result);
        
//     }
// })


//APPEND FILE
// fs.appendFileSync("./FileHandling/text.txt", 'Hey There\n')


//COPY FILE
// fs.cpSync('./FileHandling/text.txt', './FileHandling/copy.txt')


//DELETE FILE
fs.unlinkSync('./FileHandling/copy.txt')