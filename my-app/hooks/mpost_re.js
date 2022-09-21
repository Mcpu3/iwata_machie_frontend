import axios from "axios"
import { useState } from "react"


const usempostre = ()=>{
    const [res,setres] = useState()
    const mpostrelist = async () => {
      const url = await axios.get("http://localhost:8000/api/v1/mock/reactions/")
      setres(url)
    }

    return {mpostrelist,res}
}


export default usempostre
  