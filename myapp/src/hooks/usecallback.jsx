import {  useState } from "react"
import ShowCounter from "./showcounter"
import Button from "./button"

function UseCallBack(){
    const[counter1, setCounter1]=useState(0)
    const [counter2,setCounter2]=useState(0)
    function IncrementByTwo(){
        setCounter1((oldCounter)=>
            oldCounter+2

        )
        
    }
    function IncrementByFive(){
        setCounter2((oldCounter)=>oldCounter+5)
        
    }
    return(
        <div>

        <ShowCounter counter={counter1 }  title="counter-1"/>
        <Button handleClick={IncrementByTwo}>increment by two</Button>
        </div>


    )
}
export default UseCallBack