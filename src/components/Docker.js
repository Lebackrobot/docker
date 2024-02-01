import React, { useEffect, useState} from 'react'
import './Docker.css'
import dockerImage from '../images/icon.png'

import dockerApi from '../apis/docker-api'

const Docker = () => {
    const [message, setMessage] = useState()
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    };

    const id = 1

    useEffect(() => {
        dockerApi
            .get(`/message/${id}`, config)
            .then(response => setMessage(response.data))
            .catch(err => console.error(`An error has occurred: ${err}`))
    }, [])

    return (
        <div>
            <img src={ dockerImage } alt='Icon docker'/>
            <h1>{message?.description}</h1>
        </div>
    )   
}

export default Docker

