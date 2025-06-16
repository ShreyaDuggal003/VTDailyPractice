import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5;

  const addValue = () => {
    if (counter == 20)
    {
      setCounter(20)
    }
    else
    {
      // counter = counter + 1;
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+3) //updated value of counter will be of the one at last

      //this will increment the counter by 4
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
    }
    
  }

  const removeValue = () => {
    if (counter <= 0)
    {
      setCounter(0)
    }
    else
    {
      counter = counter - 1;
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Heading one</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button> <br/>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
