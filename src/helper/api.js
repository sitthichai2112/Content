import axios from 'axios'


export const baseUrl = `http://localhost:3000/api/`;


const request = (method, path, data = null, params = null, dispatch = null) => {
    return axios.request({
        url: baseUrl + path,
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        params: params,
        data: data
    })
        .then(res => {
            return res.data
        })
        .catch(error => {
        })
}


export const get = (path) => {
    return request('get', path)
}


export const post = (path, data, dispatch) => {
    return request('post', path, data, null, dispatch)
}


export const remove = (path, id) => {
    return request('delete', path + '/' + id)
}


export const update = (path, data, dispatch) => {
    return request('patch', path, data, null, dispatch)
}