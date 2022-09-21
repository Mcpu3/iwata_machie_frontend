import axios from "axios"
import { useState } from "react"


const usemnewpostidre = ()=>{
    const [res,setres] = useState()
    const mnewpostidrelist = async () => {
      const url = await axios.post("http://localhost:8000/api/v1/mock/post/{id}/new_reaction/")
      setres(url)
    }

    return {mnewpostidrelist,res}
}


export default usemnewpostidre
  