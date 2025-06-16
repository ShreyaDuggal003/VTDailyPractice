import { useState } from 'react'
import Card from './components/Card';

// function App(props) {
//   return (
//     <>
//       <h2>I am a {props.brand} {props.type}</h2>
//     </>
//   )
// }
// const element = <App brand="Ford" type="modular"/>

function App()
{
  return (
    <>
      {/* <h2>I am a {props.type} {props.brand.name} {props.brand.model}</h2> */}
       
      <Card link='https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g' 
            name='Laser Man' price='20$'/>

      <Card link='https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif?cid=ecf05e47dwh9vdr5bezeb3lbg1bqy8y3kfe61f2oopjxa2jw&rid=giphy.gif&ct=g' 
            name='DJ' price='30$'/>
    </>
  )
}

function TestProps()
{
  const type = 'car';
  const carInfo = {name: 'Ford', model: 'Mustang'}

  return(
    <>
      <h1>Below is info of car</h1>
      <App type={type} brand={carInfo}/>
    </>
  )
}


export default TestProps
