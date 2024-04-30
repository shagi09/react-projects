import { useState } from "react";
function RegistrationForm(){
    const [state,setState]=useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "",
        gender: "",
        agreement: ""
    })
    function handleChange(event){
        if(event.target.name==="name"){
            setState((oldState)=>({...oldState, name : event.target.value}))
        }
        else if(event.target.name==="email"){
            setState((oldState)=>({...oldState, email : event.target.value}))
        }
        else if(event.target.name==="password"){
            setState((oldState)=>({...oldState, password : event.target.value}))
        }
        else if(event.target.name==="confirmPassword"){
            setState((oldState)=>({...oldState, confirmPassword : event.target.value}))
        }
        else if(event.target.name==="country"){
            setState((oldState)=>({...oldState, country : event.target.value}))
        }
        else if(event.target.name==="agree"){
            setState((oldState)=>({...oldState, agreement : event.target.checked}))
        }
        else if(event.target.name==="gender"){
            setState((oldState)=>({...oldState, gender : event.target.value}))
        }

        console.log(state)

    


    }
    function HandleSubmit(event){
        event.preventDefault()
        console.log(state)


    }
    return(    <div>
        <form onSubmit={HandleSubmit}>
        <label >Name</label>
        <input type="text" value={state.name} name="name" onChange={handleChange}/>
        <br />
        <label >Email</label>
        <input type="email" value={state.email} name="email" onChange={handleChange}/>
        <br />
        <label>password</label>
        <input type="password" name="password" value={state.password} onChange={handleChange} />
        <br />
        <label>confirm password</label>
        <input type="password" name="confirmPassword" value={state.confirmPassword} onChange={handleChange} />
        <br />
        <label> country</label>
        <select name="country" value={state.country} onChange={handleChange}>
            <option value="USA">USA</option>
            <option value="CANADA">CANADA</option>
            <option value="UK">UK</option>
        </select>
        <br />
        <label>agree</label>
        <input type="checkbox" name="agree" checked={state.agreement} onChange={handleChange}/>
        <br />
        <label >male</label>
        <input type="radio" value="male" name="gender" onChange={handleChange}/>
        <label >female</label>
        <input type="radio" value="female" name="gender" onChange={handleChange}/>
        <input type="submit" value="save"/>

        </form>

    </div>)


}

export default RegistrationForm 