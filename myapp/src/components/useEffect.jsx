import { useEffect, useState } from "react";
function UseEffect(){
    const [counter, setCounter]=useState(0)
    function HandleClick(){
        setCounter((oldCounter)=>oldCounter+1)
    }
    useEffect(()=>{console.log("render after")})
    useEffect(()=>{console.log("render initially")},[])
    return(
        <div>
            <button onClick={HandleClick}>click here</button>
            {counter}
        </div>

    )
}
export default UseEffect