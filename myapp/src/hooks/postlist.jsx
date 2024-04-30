
import { Axios } from "axios";
function PostList(){

    function Get(){
        Axios.get("https://coda.io/@mark-davis/random-quote").then(res=>{
            console.log(res.data.content)
        }).catch(err=>{console.log( err)})

    }
    return(
        <div>
            <button onClick={Get}>Qoute</button>
        </div>
    )

}
export default PostList