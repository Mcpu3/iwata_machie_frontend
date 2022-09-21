import axios from "axios"
import { useState } from "react"


const usempost = ()=>{
    const [res,setres] = useState()
    const mpostlist = async () => {
        // GETリクエスト（通信）
      const url = await axios.get("http://localhost:8000/api/v1/mock/post/")
      setres(url)
    }

    return {mpostlist,res}
}


export default usempost
  