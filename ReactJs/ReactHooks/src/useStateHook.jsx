import React from 'react'
import "./App.css"
import { useState } from 'react';

// function UseStateHook() {

//     const [color, setColor] = useState("Red")

//     const changeColor = () => {
//        setColor("Blue")
//     }

//     return (
//         <>
//          <h1>My favorite color is {color}!</h1> 
//          <button onClick={changeColor}>Blue</button>  
//         </>
//     )
// }


//MULTIPLE STATES
// function UseStateHook() {

//     // const [brand, setBrand] = useState("Ferrari")
//     // const [model, setModel] = useState("Rome")
//     // const [year, setYear] = useState("2023")
//     // const [color, setColor] = useState("red")

//     //we can define a state object instead of declaring multiple states
//     const [car, setCar] = useState({
//         brand: "Ferrari",
//         model: "Roma",
//         year: "2023",
//         color: "red"
//     })

//     const changeColor = () => {
//         // setCar({color: "Blue"}) //will replace the whole object with color only
//         setCar((prev) => {
//             return {...prev, color: "blue"}
//         })
//     }

//     return (
//         <>
//          <h1> My {car.brand}</h1>
//          <h2>It is a {car.color} {car.model} from {car.year}</h2>

//          <button onClick={changeColor}>Blue</button>
//         </>
//     )
// }


//UPDATING STATE BASED ON PREVIOUS STATE
function UseStateHook() {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        // setCount(count+1)  //will take initial value every time
        // setCount(count+1)
        // setCount(count+1)

        setCount(prev => prev+1) //now it will increase by 4  
        setCount(prev => prev+1)
        setCount(prev => prev+1)
        setCount(prev => prev+1)
    }

    return (
        <>
         <h1>Count: {count}</h1>
         <button onClick={increaseCount}>Increase</button>
        </>
    )
}


export default UseStateHook