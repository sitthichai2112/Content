import {get, post, remove, update} from '../../helper/api'

export const GETLIST = 'getlist'


const mock_data = [
    {id: 1, title: 'test', description: 'test1'},
    {id: 2, title: 'test', description: 'test1'},
    {id: 3, title: 'test', description: 'test1'}
]

export const getList = () => dispatch => {

    get(`posts`)
        .then(res => {

            dispatch({
                type: GETLIST,
                list: res
            })
        })
        .catch(error => {
        });


}


export const addContent = (value, success) => dispatch => {


    post(`posts`, {title: value.title, description: value.description})
        .then(res => {
            success && success()

        })
        .catch(error => {
        });

}

export const deleteContent = (id, success) => dispatch => {

    remove(`posts`, id)
        .then(res => {
            success && success()

        })
        .catch(error => {
        });


}

export const updateContent = (value, success) => dispatch => {


    update(`posts`, value)
        .then(res => {
            success && success()

        })
        .catch(error => {
        });

}