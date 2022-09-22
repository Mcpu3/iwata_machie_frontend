import { useEffect, useState } from "react"
import usemnewpost from "../hooks/mnewpost"
import axios from "./axios"

export default function Pokemon() {
 const {mnewpostlist,res} = usemnewpost()

 useEffect(()=>{
  mnewpostlist()

  return () => console.log("end")
},[])

 useEffect(()=>{
  console.log(res)
},[res])


    return (<div>test</div>)
  }