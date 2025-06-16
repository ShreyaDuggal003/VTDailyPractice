//DATE
// let myDate = new Date();
// console.log(`Date: ${myDate}`); //will print day, date and time acc to IST

// console.log(`String: ${myDate.toString()}`); //will print day, date and time acc to IST

// console.log(`Date String: ${myDate.toDateString()}`); //will print day and date only

// console.log(`ISO String: ${myDate.toISOString()}`); //will print date and time in number format with hyphen(-)

// console.log(`JSON: ${myDate.toJSON()}`); //will print date and time in number format with hyphen(-)

// console.log(`Locale String: ${myDate.toLocaleString()}`); //will print date and time in number format with slash(/)

// console.log(`Locale Date String: ${myDate.toLocaleDateString()}`); //will print date in number format with slash(/)

// let myDate = new Date(2025, 1, 28); //days and months in javascript starts from 0 thus here it is 1st jan, 2025 in single digits
// console.log(myDate.toLocaleString());

// let myDate = new Date(2027, 0, 31, 15, 23, 62); //to add both date and time....javascript automatically handles the time
// console.log(myDate.toLocaleString());

// let date = new Date("01/02/2025"); //MM/DD/YYYY format
// console.log(date.toLocaleString());


//TIMESTAMPS
// let time = Date.now(); //will give current date's timestamp
// console.log(time);
// console.log(Math.floor(time/1000)); //to convert into seconds
// console.log(Math.floor(Date.now()/1000));//to convert ijnto seconds

// let date = new Date("01/02/2025"); 
// console.log(date.getTime()); //will give given date timestamp

//SETTING DATES ETC.
let today = new Date();
today.setFullYear(2003)
today.setHours(9, 12, 0);
today.setMonth(7);
today.setDate(23);
today.set
console.log(today.toString());
