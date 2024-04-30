import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
function Fetch(){
    const [posts, setPosts]=useState([])
    const [loading, setLoading]=useState(false)
    const [error,setError]=useState(null)
    useEffect(()=>{
        async function fetchData(){
            try{
                setLoading(true)
                const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
                setPosts(response.data)
                console.log(response)
                setLoading(false)

            }
            catch(error){
                setError(error.message)


            }


        }
        fetchData();
    },[])





    return(
        <div>
            {
            loading? <h3>loading...</h3>: error? <h3>{error}</h3>: posts.map((post)=>(
                <div key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <hr />
                    </div>
                    
            )) 
            }
  


        </div>
    )

}
export default Fetch