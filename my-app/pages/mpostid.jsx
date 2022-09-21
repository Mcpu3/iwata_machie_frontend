import { useEffect, useState } from "react"
import usempostid from "../hooks/mpostid"
import axios from "./axios"

export default function Pokemon() {
 const {mpostidlist,res} = usempostid()

 useEffect(()=>{
  mpostidlist()

  return () => console.log("end")
},[])

 useEffect(()=>{
  console.log(res)
},[res])


    return (<div>test</div>)
  }