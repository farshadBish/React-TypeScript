type PersonsListProps = {
    names :{
        first: string
        last: string
    }[]
    random : string[]
}

const PersonList = (props : PersonsListProps) => {
    return(
        <div>
            {props.names.map(name => (
                <h2 key={name.first}>{name.first} {name.last} </h2>
            ))}
            {props.random.map(anumber => (
                <h2 key={anumber}>{anumber}</h2>
            ))}
        </div>
    )
}

export default PersonList;