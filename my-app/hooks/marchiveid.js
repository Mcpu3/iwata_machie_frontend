import axios from "axios"
import { useState } from "react"


const usemarchiveid = ()=>{
    const [res,setres] = useState()
    const marchiveidlist = async () => {
        // GETリクエスト（通信）
      const url = await axios.get("http://localhost:8000/api/v1/mock/archive/{id}/")
      setres(url)
    }

    return {marchiveidlist,res}
}


export default usemarchiveid