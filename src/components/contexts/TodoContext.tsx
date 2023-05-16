import { useContext , createContext } from "react";
import Fetchapi from "../Fetchapi";

const { data , loading , error } = Fetchapi()

const TodoContext = createContext(Fetchapi());

type PropsTypes = {
    children: React.ReactNode
}

export const TodoProvider = ({children}:PropsTypes) => {

    <TodoContext.Provider value={{data , loading , error}}>
        {children}
    </TodoContext.Provider>

}
export const useTodoContext = () => useContext(TodoContext);