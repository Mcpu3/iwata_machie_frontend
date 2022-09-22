import axios from "axios";
import React, {useState} from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const newpost_id_re = ()=> {
    const [postData, setPostData] = useState({
        thumbsup:0,
        heart:0,
        smile:0,
        astonished:0,
        e_mail:''
    })
    const subimitData = () => {
        const post = async () =>{
            const result = await axios.post("http://localhost:8000/api/v1/post/1/new_reaction/", postData)
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
            <p>リアクションしてね</p>
            <TextField label="👍" variant="outlined" type='text' onChange={(e)=>{
                setPostData({
                    ...postData,
                    thumbsup: e.target.value
                })
            }} />
            
            <TextField label="🧡" variant="outlined" onChange={(e)=>{
                setPostData({
                    ...postData,
                    heart: e.target.value
                })
            }} />

            <TextField label="😀" variant="outlined" onChange={(e)=>{
                setPostData({
                    ...postData,
                    smile: e.target.value
                })
            }} />

            <TextField label="😲" variant="outlined" onChange={(e)=>{
                setPostData({
                    ...postData,
                    astonished: e.target.value
                })
            }} />
            
            <TextField label="E-mail" variant="outlined" type='text' onChange={(e)=>{
                setPostData({
                    ...postData,
                    e_mail: e.target.value
                })
            }} />

            <Button variant="contained" onClick={subimitData} >リアクション</Button>
        </div>
    )

}

export default newpost_id_re 