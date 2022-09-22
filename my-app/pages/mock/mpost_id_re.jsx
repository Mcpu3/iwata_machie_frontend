import { useEffect, useState } from "react"
import usempostidre from "../hooks/mpost_id_re"
import axios from "./axios"

export default function Pokemon() {
 const {mpostidrelist,res} = usempostidre()

 useEffect(()=>{
  mpostidrelist()

  return () => console.log("end")
},[])

 useEffect(()=>{
  console.log(res)
},[res])


    return (<div>test</div>)
}