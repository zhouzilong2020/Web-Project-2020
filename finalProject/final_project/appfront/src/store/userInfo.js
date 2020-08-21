// 登录用户的仓库数据
import {login, register} from "../services/userService"
export default{
    namespaced: true,
    state: {
        userInfo: null,
        isLoading: false,
    },
    mutations: {
        setUserInfo(state, payload) {
            state.userInfo = payload;
        },
        setIsLoading(state, payload){
            state.isLoading = payload;
        },
    },
    actions: {
        async loginUser(context, payload){
            context.commit("setIsLoading", true);
            login(payload);
            setTimeout(() => {
                context.commit("setIsLoading", false);
            }, 2000);
        },
        async regUser(context, payload){
            context.commit("setIsLoading", true);     
            var resp = register(payload);
            if(resp.status == 201){
                context.commit("setUserInfo", resp.data)
            }
            context.commit("setIsLoading", false);
        }
    },
}
