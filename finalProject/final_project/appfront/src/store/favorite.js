// 用户收藏功能数据仓库
import {getAllFavorite, removeFavorite, addFavorite} from '../services/favoriteServices'
//  addFavorite, removeFavorite
export default{
    namespaced: true,
    state:{
        newsList :[],
        isLoading : false,
    },
    mutations:{
        setNewsList(state, payload){    //首次获取数据
            state.newsList = payload;
        },
        addNews(state, payload){    //要传入完整的id 和newsid
            state.newsList.push(payload)
        },
        // 要找到数组中的一个元素然后删除，简单使用遍历，然后删除
        removeNews(state, payload){ //传入id
            for(let i = 0, len = state.newsNum; i < len; i++){
                if(state.newsList[i].id == payload){
                    state.newsList.pop(i)
                }
            }
        },
        setIsLoading(state, payload){
            state.isLoading = payload
        }
    },
    actions:{
        // payload 传入 account
        async getNewsList(context, payload){
            context.commit('setIsLoading', true)
            var resp = await getAllFavorite(payload.account)

            console.log("in store", resp)
            
            if(resp.status == 200 && resp.data.status == 0){    //获取成功
                context.commit('setNewsList', resp.data.data.newsList)
            }
            context.commit('setIsLoading', false)
        },

        //payload 传入主码
        async removeNews(context, payload){
            context.commit('setIsLoading', true)
            var resp = await removeFavorite(payload.id)

            console.log("in store", resp)
            
            if(resp.status == 200 && resp.data.status == 0){    //获取成功
                context.commit('removeNews', payload.id)
            }
            context.commit('setIsLoading', false)
        },

        //payload 传入account/newsID
        async addNews(context, payload){
            context.commit('setIsLoading', true)
            var resp = await addFavorite(payload.account, payload.newsID)

            console.log("in store", resp)
            
            if(resp.status == 200 && resp.data.status == 0){    //获取成功
                context.commit('addNews', resp.data.data)
            }
            context.commit('setIsLoading', false)
        },

    }
}