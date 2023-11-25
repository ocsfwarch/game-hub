import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1f0c36eba2df422aa877f29e771b1414'
    }
})