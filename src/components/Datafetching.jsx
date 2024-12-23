import React, { useState } from 'react'
import axios from 'axios'
const Datafetching = () => {

    const [data,setData]= useState('');

    const HandleData =async()=>{
        
        try{

           const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
           if(data){
            setData(data)
           }
        }catch(err){
            console.log("Error in fetching the data")
        }
    }


  return (
    <>
    <div>
        <h1>Data fetching ....</h1>
        <button onClick={HandleData}> Fetch Dummy Data </button>
        <h1>The fetched data title is :{data.title}</h1>
    </div>
    </>
  )
}

export default Datafetching