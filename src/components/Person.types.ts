export type Name = {
    first: string
    last: string
    age: number
}

export type PersonProps = {
    name: Name
} 


export type fetchedData = {
    userId: number
    id: number
    title: string
    completed: number
}