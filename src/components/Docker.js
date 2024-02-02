import React, { useEffect, useState} from 'react'
import './Docker.css'

import dockerImage from '../images/icon.png'
import loadingImage from '../images/loading.gif'

import dockerApi from '../apis/docker-api'

const Docker = () => {
    const [message, setMessage] = useState()
    const [loading, setLoading] = useState(true);
    const id = 1;

    useEffect(() => {
        dockerApi
            .get(`/message/${id}`)
            .then(response => {
                setMessage(response.data)
                setTimeout(() => {
                    setLoading(false)    
                }, 2000)
            })
            .catch(err => console.error(`An error has occurred: ${err}`))
    }, [])

    if (loading) {
        return (
            <div>
                <img src={ loadingImage } alt='loading image'/>
            </div>
        )
    }
    
    return (
        <div>
            <img src={ dockerImage } alt='Icon docker'/>
            <h1>{message?.description}</h1>
        </div>
    )   
}

export default Docker

