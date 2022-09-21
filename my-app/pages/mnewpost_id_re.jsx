import { useEffect, useState } from "react"
import usemnewpostidre from "../hooks/mnewpost_id_re"
import axios from "./axios"

export default function Pokemon() {
 const {mnewpostidrelist,res} = usemnewpostidre()

 useEffect(()=>{
  mnewpostidrelist()

  return () => console.log("end")
},[])

 useEffect(()=>{
  console.log(res)
},[res])


    return (<div>test</div>)
}