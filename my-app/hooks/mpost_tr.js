import axios from "axios"
import { useState } from "react"


const usemposttr = ()=>{
    const [res,setres] = useState()
    const mposttrlist = async () => {
      const url = await axios.get("http://localhost:8000/api/v1/mock/trends/")
      setres(url)
    }

    return {mposttrlist,res}
}


export default usemposttr
  