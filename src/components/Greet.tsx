// import { useTodoContext } from "./contexts/TodoContext";

type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}


const Greet = (props: GreetProps) => {
    // const {data,loading,error} = useTodoContext();
    // useEffect(()=>{
    //     console.log(data,"this is data",loading,error);
        
    // })
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