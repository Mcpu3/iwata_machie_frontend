import axios from "axios";
import React from "react";

const mnewpost = ({ data, error }) => {
    if (error) {
        return <div>An error occured: {error.message}</div>
    }
    const body = data.body
    let label = ""
    switch (data.label) {
    case 1:
        label = "善かったと思うこと"
        break
    case 2:
        label = "善くなかったと思うこと"
        break
    }
    let scale = ""
    switch (data.scale) {
    case 1:
        scale = "小"
        break
    case 2:
        scale = "中"
        break
    case 3:
        scale = "大"
        break
    }
    const e_mail = data.e_mail
    return (
        <div>
            <dl>
                <dt>Body</dt>
                <dd>{body}</dd>
                <dt>Label</dt>
                <dd>{label}</dd>
                <dt>Scale</dt>
                <dd>{scale}</dd>
                <dt>e_mail</dt>
                <dd>{e_mail}</dd>
            </dl>
        </div>
    )
}

mnewpost.getInitialProps = async ctx => {
    try {
        const response = await axios.post("http://localhost:8000/api/v1/mock/new_post/", newPost)
        const data = response.data
        return { data }
    } catch (error) {
        return { error }
    }
}

export default mnewpost