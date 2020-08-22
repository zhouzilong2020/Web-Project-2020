// 登录用户的仓库数据
// 新闻频道的数据仓库
import {getNewsChannels} from "../services/newsServices"
export default{
    namespaced : true,
    state : {
        newsChannels: null,
        isLoading : false,
        curChannel:null

    },
    mutations:{
        setNewsChannels(state, payload){
            state.newsChannels = payload
        },
        setIsLoading(state, payload){
            state.isLoading = payload
        },
        setCurChannel(state, payload){
            state.curChannel = payload;
        }
    },
    actions:{
        async getNewsChannels(context){
            context.commit("setIsLoading", true);
            var resp = await getNewsChannels();
            if(resp){
                context.commit("setNewsChannels", resp);
                context.commit("setCurChannel", resp[0].channelId)
            }
            context.commit("setIsLoading", false);
        },
        async setCurChannel(context, payload){
            context.commit("setCurChannel", payload)
        }
    }
}