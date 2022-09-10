import axios from 'axios'

const AxiosClient = axios.create({
    baseURL: 'https://api.youchen.cf//client/v4',
    timeout: 15000,
})

export function getUserHeaders() {
    const { UserModule } = require('@/store/module')

    if (UserModule.type === 'token') {
        return {
            Authorization: `Bearer ${UserModule.token}`,
        }
    } else {
        return {
            'X-Auth-Key': UserModule.globalToken,
            'X-Auth-Email': UserModule.email,
        }
    }
}

axios.interceptors.response.use(value => value, err => Promise.resolve(err))

export default AxiosClient
