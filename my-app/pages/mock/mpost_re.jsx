import { useEffect, useState } from "react"
import usempostre from "../hooks/mpost_re"
import axios from "./axios"

export default function Pokemon() {
 const {mpostrelist,res} = usempostre(


 )

 useEffect(()=>{
  mpostrelist()

  return () => console.log("end")
},[])

 useEffect(()=>{
  console.log(res)
},[res])


    return (<div>test</div>)
}