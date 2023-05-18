import { useContext, useEffect } from "react";
import { StateContext } from "./contexts/TodoContext";
type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}


const Greet = (props: GreetProps) => {

    const todoData = useContext(StateContext)

    useEffect(()=>{
        console.log(todoData.data,"this is data");
    })
    return (
        <div>
            <h2>
            {
                props.isLoggedIn ? "Welcome {props.name}! you have {props.messageCount} unread massages" : "Welcome Guest"
            }
            </h2>
        </div>
    )
}

export default Greet;