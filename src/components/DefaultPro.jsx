import React from 'react'

const DefaultPro = () => {


const greetings =(name='guest')=>{
    return <h1>Hello {name} </h1>
}



  return (
    <div>
        {greetings()}  
    </div>
  )
}

export default DefaultPro