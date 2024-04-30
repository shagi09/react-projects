import { useEffect, useState } from "react";
import UseEffect from "./useEffect";
function Timer(){
    const [timer,setTimer]=useState(new Date())
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTimer(new Date())
        },1000)
   
    return()=>{
        console.log("cleanup function called")
        clearInterval(interval)
    }
},[])


    return(
        <div>
            <p>{timer.toLocaleTimeString()}</p>

        </div>
    )

}
export default Timer