import React from "react"
function FunctionalComponent(){
        const [data, setData]=React.useState("react")

        function handleClick(course){
            console.log("button is clicked")
            setData(course)
        }



    return(
        <div><p>this is functional element</p>
        <button type="button" onClick={()=>{ handleClick("devops")}} >click me </button>
        <p>this is {data} subject </p></div>
    )
    }
export default FunctionalComponent