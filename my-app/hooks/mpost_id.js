import axios from "axios"
import { useState } from "react"


const usempostid = ()=>{
    const [res,setres] = useState()
    const mpostidlist = async () => {
      const url = await axios.get("http://localhost:8000/api/v1/mock/post/{id}/")
      setres(url)
    }

    return {mpostidlist,res}
}


export default usempostid
  