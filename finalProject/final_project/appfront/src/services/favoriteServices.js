// 用户收藏的相关功能
import axios from 'axios'
import {URL} from './config'

export async function getAllFavorite(account){
    var resp = await axios({
        method: 'get',
        url: `${URL}api/favorite/`,
        params: {
            account,
        }
    })
    console.log("in service",resp)
    return resp
}

export async function addFavorite(account, newsID){
    var resp = await axios({
        method: 'post',
        url: `${URL}api/favorite/`,
        params: {
            account,
            newsID
        }
    })   
    console.log("in service",resp)
    return resp
}

export async function removeFavorite(id){
    var resp = await axios({
        method: 'delete',
        url: `${URL}api/favorite/`,
        params: {
            id,
        }
    })
    console.log("in service",resp)
    return resp
}