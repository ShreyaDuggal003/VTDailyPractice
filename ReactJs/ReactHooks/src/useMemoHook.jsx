import React, { useMemo, useState } from 'react'

function UseMemoHook() {

    const[number, setNumber] = useState(0)
    const[counter, setCounter] = useState(0)

    function cubeNum(num) {
        console.log('Calculation done')
        return Math.pow(num, 3)
    }

    // const result = cubeNum(number) //called whenever anything changes inside the component which is wromg

    const result = useMemo(() => {
        return cubeNum(number)
    }, [number]) //will be executed only when number is updated or changed

    return (
        <>
         <input type="number" value={number} 
         onChange={(e) => {setNumber(e.target.value)}}/>

         <h1>Cube of the number: {result}</h1>
         <button onClick={() => {setCounter(counter+1)}}>Counter++</button>
         <h1>Counter: {counter}</h1>
         </>
    )
}

export default UseMemoHook
