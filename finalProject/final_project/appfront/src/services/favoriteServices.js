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

export async function addFavorite(payload){
    var resp = await axios({
        method: 'post',
        url: `${URL}api/favorite/`,
        params: {
            account : payload.account,
            newsID : payload.newsID,
            pubDate : payload.pubDate,
            title : payload.title,
            source : payload.source,
            content : payload.content,
            link : payload.link,
            imageurls : payload.imageurls,
            havePic : payload.havePic,
        }
    })   
    console.log("in service",resp)
    return resp
}

// pubDate = models.CharField(max_length=16, default=" ")
//     title = models.CharField(max_length = 32, default=" ")
//     scource = models.CharField(max_length = 16, default=" ")
//     content = models.CharField(max_length = 512, default=" ") 
//     link = models.CharField(max_length = 512, default=" ")

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