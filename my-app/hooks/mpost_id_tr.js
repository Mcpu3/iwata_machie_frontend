import axios from "axios"
import { useState } from "react"


const usempostidtr = ()=>{
    const [res,setres] = useState()
    const mpostidtrlist = async () => {
      const url = await axios.get("http://localhost:8000/api/v1/mock/post/{id}/trend")
      setres(url)
    }

    return {mpostidtrlist,res}
}


export default usempostidtr
  