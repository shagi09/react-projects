import { useReducer } from "react"
function UseReducer(){
const initialState={
    counter: 0,
}


function reducer(state,action){
    switch(action.type){
        case "increment":
            return { counter: state.counter+1}
        case "decrement":
            return {counter:state.counter-1};
        default:
            return {counter: state.counter};
    }


}



    const[state,dispatch]=useReducer(reducer,initialState)
    const{counter}=state;
    
    return(
        <div>
            <button onClick={()=>dispatch({type: "increment"})}>+</button>
            <p>{counter}</p>
            <button onClick={()=>dispatch({type: "decrement"})}>-</button>

        </div>
    )

}
export default UseReducer