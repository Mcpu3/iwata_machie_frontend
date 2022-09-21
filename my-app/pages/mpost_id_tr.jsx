import { useEffect, useState } from "react"
import usempostidtr from "../hooks/mpost_id_tr"
import axios from "./axios"

export default function Pokemon() {
 const {mpostidtrlist,res} = usempostidtr()

 useEffect(()=>{
  mpostidtrlist()

  return () => console.log("end")
},[])

 useEffect(()=>{
  console.log(res)
},[res])


    return (<div>test</div>)
}