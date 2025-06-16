import React from 'react'

function Card(props) {
    console.log("Props: ", props);
    return (
         <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src={props.link}
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h1 className="font-bold ">{props.name}</h1>
            <h1>Price: {props.price}</h1>
             
          </div>
          <div className="flex  justify-between">
           
          </div>
        </div>
      </div>
        
    )
}

export default Card
