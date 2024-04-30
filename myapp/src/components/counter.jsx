import { useState } from "react"
function Counter({render}){
    const [counter, setCounter]=useState(0)
    function handleClick(){
        setCounter((oldCounter) => oldCounter + 1)
    }
    return render(counter, handleClick)

}
export default Counter