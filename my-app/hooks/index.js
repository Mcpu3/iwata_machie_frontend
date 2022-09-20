import axios from "axios"
import { useState } from "react"


const usepokemon = ()=>{
    const [res,setres] = useState()
    const Getpokemonlist = async () => {
        // GETリクエスト（通信）
      const url = await axios.get("http://localhost:8000/api/v1/mock/post/")
      setres(url)
    }

    return {Getpokemonlist,res}
}


export default usepokemon
  