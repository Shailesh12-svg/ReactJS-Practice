import React, { useContext, useState } from 'react'
import axios from 'axios'
import { ThemeContext, Themes } from './Themes';
const Datafetching = () => {

    const [data,setData]= useState(null);
    const [loading,setLoading]=useState(true)
    const {theme,toggleTheme}=useContext(ThemeContext)
//Handle the loading state

    const HandleData =async()=>{
        
        try{

           const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
           setData(res.data)
           setLoading(false)
           
        }
        catch(err){
            console.log("Error in fetching the data")
        }
    }


  return (
    <>
    <div style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '1rem',
        textAlign: 'center',
      }}>
        <h1>Data fetching ....</h1>
        {loading && <h1>The data is loading please have patience</h1>}
        <button onClick={HandleData}> Fetch Dummy Data </button>
        {data&&<h1>The fetched data title is :{data.title}</h1>}
        <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
    </>
  )
}

export default Datafetching