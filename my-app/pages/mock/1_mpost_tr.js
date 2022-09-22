import axios from "axios";
import React from "react";


const mpost_tr = ({ data, error }) => {
    if (error) {
        return <div>An error occured: {error.message}</div>
    }
    return (
        <div>
            {data.trends.map(element_of_data => (
                <dl>
                    <dt>id</dt>
                    <dd>{element_of_data.id}</dd>
                    <dt>thumbsup</dt>
                    <dd>{element_of_data.thumbsup}</dd>
                    <dt>heart</dt>
                    <dd>{element_of_data.heart}</dd>
                    <dt>smile</dt>
                    <dd>{element_of_data.smile}</dd>
                    <dt>astonished</dt>
                    <dd>{element_of_data.astonished}</dd>
                </dl>
            ))}
        </div>
    )
}

mpost_tr.getInitialProps = async ctx => {
    try {
        const response = await axios.get("http://localhost:8000/api/v1/mock/trends/?label=1&scale=1")
        const data = response.data
        return { data }
    } catch (error) {
        return { error }
    }
}

export default mpost_tr