import { createContext , useContext } from "react";
import Fetchapi from "../Fetchapi";

const { data, loading , error} = Fetchapi();

const TodoContext = createContext({ data, loading , error})

type propsType = {
    children: React.ReactNode
}
export function TodoProvider({children}: propsType){

    return(
        <TodoContext.Provider value={{data , error , loading}}>
            {children}
        </TodoContext.Provider>
    )
}

export function useTodoContext(){
    return useContext(TodoContext)
}