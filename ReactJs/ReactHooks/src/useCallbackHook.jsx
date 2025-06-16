import React, { useCallback, useState } from 'react'
import Header from './Components/Header'

function UseCallbackHook() {

    const [count, setCount] = useState(0)

    // const newFunction = () => {} //Header will be re-rendered again because new instance of this function is creating everytime

    const newFunction = useCallback(() => {}, []) //will not create instance of this function everytime
    //if any depemdency then it will change acc to the dependency
    
    return (
        <>
        <Header newFunction={newFunction}/>
         <h1>{count}</h1>
         <button onClick={() => setCount(prev=>prev+1)}>Click Me</button>
        </>
    )
}

export default UseCallbackHook
