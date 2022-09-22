import { useEffect, useState } from "react"
import usemarchiveid from "../hooks/marchiveid"
import axios from "./axios"

export default function Pokemon() {
 const {marchiveidlist,res} = usemarchiveid()

 useEffect(()=>{
  marchiveidlist()

  return () => console.log("end")
},[])

 useEffect(()=>{
  console.log(res)
},[res])

  /* try{
    //例外が発生する可能性のある処理
    console.log(url)
  }catch(e){
    //例外が発生した場合の処理
    console.error(e)
  }

  console.log("test")

  console.log(url) */
    return (<div>test</div>)
  }