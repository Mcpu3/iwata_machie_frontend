import { useEffect, useState } from "react"
import usemposttr from "../hooks/mpost_tr"
import axios from "./axios"

export default function Pokemon() {
 const {mposttrlist,res} = usemposttr()

 useEffect(()=>{
  mposttrlist()

  return () => console.log("end")
},[])

 useEffect(()=>{
  console.log(res)
},[res])


    return (<div>test</div>)
}