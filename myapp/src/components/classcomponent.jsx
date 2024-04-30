import React from "react";
class ClassComponent extends React.Component{
state={course : "react", counter:0}
componentDidMount(){
    console.log("after render")
    this.setState((oldState)=>{
        return{
            course:"vue",
            counter: oldState.counter+1
        }
    })



}
    
    render(){
        console.log("before render")
        return(
            <div>
                <p>this is class based component</p>
                <p>this is {this.state.course} course</p>
            </div>
        )
    }
}

export default ClassComponent