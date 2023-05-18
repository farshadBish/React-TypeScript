import { useContext , createContext, useReducer, useEffect, Dispatch } from "react";
import { fetchedData } from "../Person.types"

type reducerStateTypes = {
    data : fetchedData[] | null
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
    data : null,
    loading : false,
    error : ''
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

type PropsTypes = {
    children: React.ReactNode
}
export const StateContext = createContext<reducerStateTypes>(INITIALSTATE);
export const DispatchContext = createContext<Dispatch<reducerActionTypes> | reducerActionTypes>({type : 'LoadingStarts'})

export const TodoProvider = ({children}:PropsTypes) => {
    const [state,dispatch] = useReducer<React.Reducer<reducerStateTypes,reducerActionTypes>>(reducerFunction,INITIALSTATE); 
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
            
            const data:fetchedData[] = await res.json()
            
            dispatch({type: 'FetchedSuccesfully', payload: data})
        } catch (error) {
            dispatch({type:'FetchedFailed',payload: error})
        }
    }
    useEffect(()=>{
        console.log("this is data");
        fetchData();
    },[])
    return(
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
            {children}
            </DispatchContext.Provider>
            </StateContext.Provider>  
    ) 
    

}
// export const useStateContext = () => useContext(StateContext);
// export const useDispatchContext = () => useContext(DispatchContext);