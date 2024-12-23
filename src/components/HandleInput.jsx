import React from 'react'

import { useState } from 'react'



const HandleInput = () => {

    const [firstName,setFirstName] =useState('')

    const inputhandling = (event)=>{
        setFirstName(event.target.value)
    }



  return (
    <div>
        <h1>Handle Input Form</h1>
        <h1>First Name </h1>
        <input type='text' value={firstName} placeholder='First Name:' onChange={inputhandling}/>
        <h1>Your name is {firstName}</h1>
    </div>
  )
}

export default HandleInput