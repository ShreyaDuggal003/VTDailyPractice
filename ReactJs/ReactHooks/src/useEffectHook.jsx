import { useEffect, useState } from 'react'
import "./App.css"

function UseEffectHook() {

  const [count, setCount] = useState(0)

  //WITHOUT ANY DEPENDENCIES- will run everytime the count state changes
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count+1)
  //   }, 2000)
  // })

  //WITH EMPTY ARRAY AS DEPENDENCY- will execute only once when the component gets loaded
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count+1)
  //   }, 2000)
  // }, [])

  //WITH DEPENDENCIES IN ARRAY- will execute whenever the num changes

  const [num, setNum] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setCount(count+1)
    }, 2000)
  }, [num])

  const changeNum = () => {
    setNum(num+1)
  }


  return (
    <>
     <h1>I have rendered {count} times with num = {num}!</h1>
     <button onClick={changeNum}>IncreaseNum</button>
    </>
  )
}

export default UseEffectHook
