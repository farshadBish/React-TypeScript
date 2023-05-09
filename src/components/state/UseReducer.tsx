import React, { useReducer } from "react"


type stateTypes = {

    inputValue : string
}
type actionTypes = {
    type : 'TYPING'
    payload: string
}

const initialstates = {
    inputValue : ""

}

function reduceFunction(state:stateTypes,action:actionTypes) {

    switch (action.type) {
        case "TYPING":
            
            return {inputValue : action.payload};
    
        default:
            return state;
    }
}


export const UseReducer = () => {

const [state,dispatch] = useReducer(reduceFunction,initialstates);

const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    dispatch({type:"TYPING",payload:e.target.value}) 
}

return(
    <input type="text" value={state.inputValue} onChange={handleChange}/>
)
}