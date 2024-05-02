import SubComponent from "./subcomponent"
import ClassComponent from "./components/classcomponent"
import FunctionalComponent from "./components/functionalcomponent"
import ConditionalRendering from "./components/conditionalrendering"
import CounterApp from "./components/counterApp"
import Form from "./components/form"
import RegistrationForm from "./components/registrationForm"
import ClickCounter from "./components/clickCounter"
import Counter from "./components/counter"
import HoverCounter from "./components/hoverCounter"
import RenderProps from "./components/renderProps"
import Component1 from "./components/component1"
import CourseContext from "./components/CourseContext"
import UseEffect from "./components/useEffect"
import Timer from "./components/TIMER"
import { useEffect } from "react"
import Fetch from "./components/fetch"
import UseCallBack from "./hooks/usecallback"
import UseRef from "./hooks/useref"
import UseReducer from "./hooks/useReducer"
import PostList from "./hooks/postlist"
import UseStateHook from "./hooks/usestatehook"

function App() { 
  const[toggle, setToggle]=useState(false)




  



  return (
    <div>
            {/*<p>this is root component</p>
            <SubComponent/>

      <ClassComponent test="this is children"/>
      <FunctionalComponent/>
      <ConditionalRendering/>
      <CounterApp/>
  <Form/>
  <RegistrationForm/>
    <RenderProps course="react"/>
      <HoverCounter/>
  <Counter render={(counter, handleClick)=><ClickCounter counter={counter} handleClick={handleClick}/> }/>
  <CourseContext.Provider value={{course: "react"}}>
      <Component1/>
  </CourseContext.Provider>
  <UseEffect/>
  <button onClick={()=>{
    setToggle(!toggle)
  }}>toggle</button>
  {toggle? <CounterApp/>: <Timer/>}
  <UseCallBack/>



<Fetch/>
  <UseRef/>
<UseReducer/>
<Fetch/>*/}
<UseStateHook/>




  






    
  
    </div>
  )


}

export default App
