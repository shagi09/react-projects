import React, { useState } from "react"
function HoverCounter(){
    const [counter, setCounter]=useState(0)
    function handleClick(){
        setCounter((oldCounter) => oldCounter + 1)
    }
    return(
    <div>
        <h1 onMouseOver={handleClick}>hovered {counter} times</h1>
    </div>
    )}
    export default HoverCounter