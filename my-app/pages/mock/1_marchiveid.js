import axios from "axios";
import React from "react";


const marchiveid = ({ data, error }) => {
    if (error) {
        return <div>An error occured: {error.message}</div>
    }
    const id = data.id
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
    const created_at = data.created_at
    return (
        <div>
            <dl>
                <dt>Id</dt>
                <dd>{id}</dd>
                <dt>Body</dt>
                <dd>{body}</dd>
                <dt>Label</dt>
                <dd>{label}</dd>
                <dt>Scale</dt>
                <dd>{scale}</dd>
                <dt>Created at</dt>
                <dd>{created_at}</dd>
            </dl>
        </div>
    )
}

marchiveid.getInitialProps = async ctx => {
    try {
        const response = await axios.get("http://localhost:8000/api/v1/mock/archive/2/")
        const data = response.data
        return { data }
    } catch (error) {
        return { error }
    }
}

export default marchiveid