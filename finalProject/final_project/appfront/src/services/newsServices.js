// 新闻接口数据
import axios from 'axios'
import {NEWSCODE} from './config'

/**
 * 新闻类别
 */
export async function getNewsChannels(){
    var resp = await axios.get('http://ali-news.showapi.com/channelList',{
        headers:{
            Authorization: "APPCODE " + NEWSCODE
        },
    });
    return resp.data.showapi_res_body.channelList
}

getNewsChannels();

/**
 * 分页获取新闻数据
 * @param {*} channelId 频道id
 * @param {*} page 页码
 * @param {*} maxResult 每一页面的上限
 */
export async function getNews(channelName, page = 1, maxResult = 12){
    var resp = await axios.get('http://ali-news.showapi.com/newsList',{
        headers:{
            Authorization: "APPCODE " + NEWSCODE
        },
        params:{
            needAllList:1,
            needContent:1,
            channelName,
            page,
            maxResult,
        }
        
    });
    return resp.data.showapi_res_body.pagebean
}