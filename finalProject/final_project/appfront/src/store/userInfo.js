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

            var resp = await login(payload);
            console.log("as1231231dasd")
            if(resp.status == 0){// 登录成功
                context.commit("setUserInfo", resp.data.userInfo)
            }
            else{// 失败
                console.log("fail")
            }

            setTimeout(() => {
                context.commit("setIsLoading", false);
            }, 2000);
        },

        async regUser(context, payload){
            context.commit("setIsLoading", true);     
            var resp = await register(payload);
            console.log(resp)
            if(resp.status == 0){ // 注册成功
                context.commit("setUserInfo", resp.data.userInfo)
            }
            else{
                //注册失败
                console.log("fail")
            }
            setTimeout(() => {
                context.commit("setIsLoading", false);
            }, 2000);
        },

        async logoutUser(context){
            // context.commit("setIsLoading", true);
            context.commit("setUserInfo", null);     
            setTimeout(() => {
                // context.commit("setIsLoading", false);
            }, 2000);
        },

    },
}
