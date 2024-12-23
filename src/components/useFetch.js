import axios from "axios";
import { useEffect, useState } from "react";

const useFetch =(url)=>{


    //States
    const[data,setData]=useState('')
    const[loading,setLoading]=useState(true)

    const fetchData = async(url)=>{
        const res = axios.get(url)
        setData(res.data)
        setLoading(false)

    }

    useEffect(()=>{
        fetchData(url)
    },[url])

    return(
        {data,loading}
    )


}

export default useFetch