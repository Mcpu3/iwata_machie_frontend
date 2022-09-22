import axios from "axios";
import React, {useState} from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const newpost = ()=> {
    const [postData, setPostData] = useState({
        body:'',
        label:0,
        scale:0,
        e_mail:''
    })
    const subimitData = () => {
        const post = async () =>{
            const result = await axios.post("http://localhost:8000/api/v1/new_post/", postData)
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
            <TextField label="本文" variant="outlined" type='text' onChange={(e)=>{
                setPostData({
                    ...postData,
                    body: e.target.value
                })
            }} />
            
            <TextField label="善い行いか善くなかった行いか" variant="outlined" onChange={(e)=>{
                setPostData({
                    ...postData,
                    label: e.target.value
                })
            }} />

            <TextField label="規模" variant="outlined" onChange={(e)=>{
                setPostData({
                    ...postData,
                    scale: e.target.value
                })
            }} />
            
            <TextField label="E-mail" variant="outlined" type='text' onChange={(e)=>{
                setPostData({
                    ...postData,
                    e_mail: e.target.value
                })
            }} />


            <Button variant="contained" onClick={subimitData} >投稿！！</Button>
        </div>
    )

}

export default newpost 