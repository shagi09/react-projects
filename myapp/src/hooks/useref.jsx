import { useRef } from "react"
import { useState ,useEffect} from "react"

function UseRef(){
    const [input, setInput]=useState({name: "", password: "", email: ""})
    const inputRef= useRef(null)

    useEffect(()=>{
        console.log(inputRef.current)
        inputRef.current.focus()
        inputRef.current.style.border="4px solid yellow"

    },[])

    function HandleChange(e){
        setInput((prev)=>(
            {
                ...prev,[e.target.name]: e.target.value
            }
        ))

    }

    return(
        <div>
            <input type="text" name="name" value={input.name} onChange={HandleChange}/><br />
            <input ref={inputRef} type="password" name="password" value={input.password} onChange={HandleChange}/><br />
            <input type="email" name="email" value={input.email} onChange={HandleChange}/>
        </div>

    )
}
export default UseRef