import { useState } from "react";
function CounterApp(){
    const[counter, setCounter]=useState(0)
    function handleInduce(){
        setCounter(counter+1)

    }
    function handleReduce(){
        setCounter(counter-1)

    }

    return(
        <div>
             <button onClick={handleReduce}>-</button>
             <span>{counter}</span>
             <button onClick={handleInduce}>+</button>

        </div>
    )
}
export default CounterApp