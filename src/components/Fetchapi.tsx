
import React, { useEffect, useState } from 'react'
import { fetchedData } from './Person.types'




const Fetchapi = () => {
    const [data,setData] = useState<fetchedData[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState< any | unknown>(null)

    const fetchData = async() => {
        const url:string = "https://jsonplaceholder.typicode.com/todos";
        try {
            const res:Response = await fetch(url,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data: fetchedData[] = await res.json()
            setData(data)
            console.log(data);
            
        } catch (error: any | unknown) {
            setError(error)
        }
        setLoading(false)
    }
    useEffect(()=>{
        fetchData();
    },[])

  return {data , loading , error}
}

export default Fetchapi;