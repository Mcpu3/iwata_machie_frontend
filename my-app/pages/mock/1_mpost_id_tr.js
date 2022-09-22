import axios from "axios";
import React from "react";


const mpost_id_tr = ({ data, error }) => {
    if (error) {
        return <div>An error occured: {error.message}</div>
    }
    const id = data.id
    const thumbsup = data.thumbsup
    const heart = data.heart
    const smile = data.smile
    const astonished = data.astonished
    return (
        <div>
            <dl>
                <dt>Id</dt>
                <dd>{id}</dd>
                <dt>Thumbsup</dt>
                <dd>{thumbsup}</dd>
                <dt>Heart</dt>
                <dd>{heart}</dd>
                <dt>Smile</dt>
                <dd>{smile}</dd>
                <dt>Astonished</dt>
                <dd>{astonished}</dd>
            </dl>
        </div>
    )
}

mpost_id_tr.getInitialProps = async ctx => {
    try {
        const response = await axios.get("http://localhost:8000/api/v1/mock/post/1/trend/")
        const data = response.data
        return { data }
    } catch (error) {
        return { error }
    }
}

export default mpost_id_tr