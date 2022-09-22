import axios from "axios";
import React from "react";


const mpost_re = ({ data, error }) => {
    if (error) {
        return <div>An error occured: {error.message}</div>
    }
    return (
        <div>
            {data.reactions.map(element_of_data => (
                <dl>
                    <dt>Id</dt>
                    <dd>{element_of_data.id}</dd>
                    <dt>Thumbsup</dt>
                    <dd>{element_of_data.thumbsup}</dd>
                    <dt>Heart</dt>
                    <dd>{element_of_data.heart}</dd>
                    <dt>Smile</dt>
                    <dd>{element_of_data.smile}</dd>
                    <dt>Astonished</dt>
                    <dd>{element_of_data.astonished}</dd>
                </dl>
            ))}
        </div>
    )
}

mpost_re.getInitialProps = async ctx => {
    try {
        const response = await axios.get("http://localhost:8000/api/v1/mock/reactions/?e_mail=abc@email.com")
        const data = response.data
        return { data }
    } catch (error) {
        return { error }
    }
}

export default mpost_re