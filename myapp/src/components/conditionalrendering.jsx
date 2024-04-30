import { useState } from "react"
function ConditionalRendering(){
    const[isLoggedIn, setIsLoggedIn]=useState(true)
    const items=["react","vue","angular"]
    function handleLogIn(){
        setIsLoggedIn(true)

    }
    function handleLogOut(){
        setIsLoggedIn(false)

    }
    let text;
    if(isLoggedIn){
        text="welcome user"
    }
    else{
        text="click here to login"
    }
    return(

        <div>
            <p>{text}</p>
            {isLoggedIn===false? <button onClick={handleLogIn}>log in</button>: <button onClick={handleLogOut}>log out</button>}
            <p>course names</p>
            <ul>{items.map((item)=>(<li>{item}</li>))}</ul>
            </div>
        
    )
    
}
export default ConditionalRendering