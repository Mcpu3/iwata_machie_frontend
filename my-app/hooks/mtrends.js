import axios from "axios"
import { useState } from "react"

const usemtrends = ()=>{
    const [res,setres] = useState()
    const mtrendslist = async () => {
        // GETリクエスト（通信）
      const url = await axios.get("http://localhost:8000/api/v1/mock/trends/")
      setres(url)
    }

    return {mtrendslist,res}
}


export default usemtrends