type GreetProps = {
    name: string
}

const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Welcome {props.name}! you have 10 unread massages</h2>
        </div>
    )
}

export default Greet;