import axios from 'axios'

const dockerApi = axios.create({
    baseURL: 'https://docker-backend-deploy.onrender.com'
})

export default dockerApi;