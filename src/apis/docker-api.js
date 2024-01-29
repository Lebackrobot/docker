import axios from 'axios'

const dockerApi = axios.create({
    baseURL: 'http://localhost:4000'
})

export default dockerApi;