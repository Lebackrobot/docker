import axios from 'axios'

const dockerApi = axios.create({
    baseURL: 'https://docker-backend-dev.onrender.com'
})

export default dockerApi;