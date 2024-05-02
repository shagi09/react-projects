import { useState } from "react"
function UseStateHook(){
    const [count, setCount]=useState(0)
    
    function Decreament(){
        setCount(count=count-1)
    }

    return(
        <div>
            <button onClick={Decreament}>-</button>
            <span>{count}</span>
            <button>+</button>
        </div>
    )

}
export default UseStateHook