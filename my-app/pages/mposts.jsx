import { useEffect, useState } from "react"
import usemposts from "../hooks/mposts"
import axios from "./axios"

export default function Pokemon() {
 const {mpostslist,res} = usemposts()

 useEffect(()=>{
  mpostslist()

  return () => console.log("end")
},[])

 useEffect(()=>{
  console.log(res)
},[res])


    return (<div>test</div>)
  }