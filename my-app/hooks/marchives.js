import axios from "axios"
import { useState } from "react"


const usemarchives = ()=>{
    const [res,setres] = useState()
    const marchiveslist = async () => {
        // GETリクエスト（通信）
      const url = await axios.get("http://localhost:8000/api/v1/mock/archives/")
      setres(url)
    }

    return {marchiveslist,res}
}


export default usemarchives