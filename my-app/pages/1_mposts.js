import axios from "axios";
import React from "react";


const mposts = ({ data, error }) => {
    if (error) {
        return <div>An error occured: {error.message}</div>
    }
    return (
        <div>
            {data.posts.map(element_of_data => (
                <dl>
                    <dt>Id</dt>
                    <dd>{element_of_data.id}</dd>
                    <dt>Body</dt>
                    <dd>{element_of_data.body}</dd>
                    <dt>Label</dt>
                    <dd>{element_of_data.label}</dd>
                    <dt>Scale</dt>
                    <dd>{element_of_data.scale}</dd>
                    <dt>Created at</dt>
                    <dd>{element_of_data.created_at}</dd>
                </dl>
            ))}
        </div>
    )
}

mposts.getInitialProps = async ctx => {
    try {
        const response = await axios.get("http://localhost:8000/api/v1/mock/posts/?e_mail=abc@email.com")
        const data = response.data
        return { data }
    } catch (error) {
        return { error }
    }
}

export default mposts