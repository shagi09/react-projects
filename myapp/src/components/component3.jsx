import CourseContext from "./CourseContext"
import { useContext } from "react"

function Component3(){
    const context=useContext(CourseContext)
    return(

        <div>
            <p>component3</p>
            <CourseContext.Consumer>
                {(value)=><p>course: {value.course}</p>}
            </CourseContext.Consumer>
        </div>
    )

}
export default Component3