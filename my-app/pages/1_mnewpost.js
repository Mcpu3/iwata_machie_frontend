import axios from "axios";
import React, {useState} from 'react';

const mnewpost = ()=> {
    const [postData, setPostData] = useState({
        body:'',
        label:0,
        scale:0,
        e_mail:''
    })
    const subimitData = () => {
        const post = async () =>{
            const result = await axios.post("http://localhost:8000/api/v1/mock/new_post/", postData)
            console.log(result)
        }
        try{
            post()
        }catch(err){
            console.error(err)
        }
    }

    return (
        <div>
            <p>投稿内容を書いてね</p>
            <input type='text' onChange={(e)=>{
                setPostData({
                    ...postData,
                    body: e.target.value
                })
            }} />
            
            <input onChange={(e)=>{
                setPostData({
                    ...postData,
                    label: e.target.value
                })
            }} />

            <input onChange={(e)=>{
                setPostData({
                    ...postData,
                    scale: e.target.value
                })
            }} />
            
            <input type='text' onChange={(e)=>{
                setPostData({
                    ...postData,
                    e_mail: e.target.value
                })
            }} />


            <button onClick={subimitData} >投稿！！</button>
        </div>
    )

}

export default mnewpost 