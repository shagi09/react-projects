import { useState } from "react"
function Form(){
    const [state, setState]= useState("")
    const [country, setCountry]=useState("")
    const [check,setCheck]=useState(false)
    const [gender,setGender]=useState("")
    function handleChange(event){
        if(event.target.name==="course"){
            setState(event.target.value)

        }
        else if(event.target.name==="country"){
            setCountry(event.target.value)


        }
        else if(event.target.name==="check"){
            setCheck(event.target.checked)

        }
        else if(event.target.name==="gender"){
            setGender(event.target.value)
 
        }




    }
    function HandleSubmit(event){
        event.preventDefault()
        console.log(state)
        console.log(country)
        console.log(check)
        console.log(gender)
    }
    return(
        <div>
            <form onSubmit={HandleSubmit}>
                <input type="text" name="course" value={state} onChange={handleChange} />
                <br />
                <select name="country" value={country} onChange={handleChange}>
                    <option value="USA">USA</option>
                    <option value="CANADA">CANADA</option>
                    <option value="UK">UK</option>
                </select>
                <br />
                <input type="checkbox" name="check" checked={check} onChange={handleChange}/>
                <br />
                <input type="radio" name="gender" value="male" onChange={handleChange} />
                <input type="radio" name="gender" value="female" onChange={handleChange} />
                <input type="radio" name="gender" value="others" onChange={handleChange} />
                <br />
                <input type="submit" value="save" />
            </form>
        </div>
    )
}
export default Form