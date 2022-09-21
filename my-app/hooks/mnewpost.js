import axios from "axios"
import { useState } from "react"


const usemnewpost = ()=>{
    const [res,setres] = useState()
    const mnewpostlist = async () => {
      const url = await axios.post("http://localhost:8000/api/v1/mock/new_post/")
      setres(url)
    }

    return {mnewpostlist,res}
}


export default usemnewpost
  