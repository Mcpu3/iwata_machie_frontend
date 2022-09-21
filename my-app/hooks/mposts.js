import axios from "axios"
import { useState } from "react"


const usemposts = ()=>{
    const [res,setres] = useState()
    const mpostslist = async () => {
      const url = await axios.get("http://localhost:8000/api/v1/mock/posts/")
      setres(url)
    }

    return {mpostslist,res}
}


export default usemposts