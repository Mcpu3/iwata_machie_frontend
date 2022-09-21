import axios from "axios"
import { useState } from "react"


const usempostidre = ()=>{
    const [res,setres] = useState()
    const mpostidrelist = async () => {
      const url = await axios.get("http://localhost:8000/api/v1/mock/post/{id}/reaction/")
      setres(url)
    }

    return {mpostidrelist,res}
}


export default usempostidre
  