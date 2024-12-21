import React, { useState } from 'react'

const Counter = ({name}) => {

    const[count,setCount] =useState(0) ;//
    
    const increment =()=>{
        setCount(count+1)
    }
    
    const decrement =()=>{
        setCount(count-1)
    }

    const reset = ()=>{
        setCount(0)
    }


     //Intital value of count is set as 0


  return (
    <>
    <h1>Welcome {name} to the WebPage!!!</h1>
    <div>counter EXample using Functional components</div>
    <p>{count}</p>
    <button onClick={()=>increment()}>Counter increment </button>
    <button onClick={()=>decrement()}>Counter decrement </button>
    <button onClick={()=>reset()}>Counter reset </button>
    </>
  )
}

export default Counter