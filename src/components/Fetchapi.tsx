
import React, { useEffect, useReducer, useState } from 'react'
import { fetchedData } from './Person.types'


type reducerStateTypes = {
    data : fetchedData[]
    loading : boolean
    error : any | unknown
}

type errorAndDataActionTypes = {
    type : 'FetchedSuccesfully'
    payload : fetchedData[]
}

type errorActionType = {
    type : 'FetchedFailed'
    payload : any
}

type loadingActionType = {
    type : 'LoadingStarts'
}

type reducerActionTypes = loadingActionType | errorAndDataActionTypes | errorActionType;

const INITIALSTATE = {
    data : [],
    loading : false,
    error : null
}

const reducerFunction = (state:reducerStateTypes,action:reducerActionTypes) => {

    switch (action.type) {
        case "LoadingStarts":
            
            return {
                ...state,
                loading: true
            };
        case "FetchedSuccesfully":

            return {
                ...state,
                data : action.payload,
                loading : false
            };
        case "FetchedFailed":

            return {
                ...state,
                error : action.payload,
                loading : false
            }

    
        default:
            return state;
    }
}

const Fetchapi = () => {
    // const [data,setData] = useState<fetchedData[]>([])
    // const [loading,setLoading] = useState<boolean>(false)
    // const [error,setError] = useState< any | unknown>(null)

    const [state,dispatch] = useReducer(reducerFunction,INITIALSTATE); 

    const fetchData = async() => {
        const url:string = "https://jsonplaceholder.typicode.com/todos";
        dispatch({type: 'LoadingStarts'})
        try {
            const res:Response = await fetch(url,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data:[] = await res.json()
            dispatch({type: 'FetchedSuccesfully', payload: data})
            console.log(data);
            
        } catch (error) {
            dispatch({type:'FetchedFailed',payload: error})
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    const data = state.data
    const loading = state.loading
    const error = state.error

  return {data , loading , error}
}

export default Fetchapi;