import React from 'react'
import useLocalStorage from './useLocalStorage'

function CustomHook() {

    const[name, setName] = useLocalStorage('username', '')

    return (
        <>
         <input 
         type="text" 
         placeholder='Enter name' 
         value={name}
         onChange={(e) => setName(e.target.value)}
         /> 

         <h2>Hello, {name}!</h2>    
        </>
    )
}

export default CustomHook
