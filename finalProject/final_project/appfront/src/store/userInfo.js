// 登录用户的仓库数据
import {login, whoAmI, logout,register, changeNickname, changePassword} from "../services/userService"
export default{
    namespaced: true,
    state: {
        userInfo: null,
        history: null,
        favorite: null,
        isLoading: false,
    },
    mutations: {
        setUserInfo(state, payload) {
            state.userInfo = payload;
        },
        setIsLoading(state, payload){
            state.isLoading = payload;
        },
        setNickname(state, payload){
            // 只用当获取了用户权限后才能修改昵称
            if(state.userInfo.nickname){
                state.userInfo.nickname = payload;
            }
        },
    },
    actions: {
        async loginUser(context, payload){
            context.commit("setIsLoading", true);
            var resp = await login(payload);
            if(resp.status == 200 && resp.data.status == 0){// 登录成功
                context.commit("setUserInfo", resp.data.data.userInfo)
            }
            else{// 失败
                console.log("fail")   
            }
            setTimeout(() => {
                context.commit("setIsLoading", false);
            }, 2000);
        },

        async whoAmI(context){
            var resp = await whoAmI()
            if(resp){
                context.commit("setUserInfo", resp)
            }
        },

        async regUser(context, payload){
            context.commit("setIsLoading", true);     
            var resp = await register(payload);

            if(resp.status == 200 && resp.data.status == 0){ // 注册成功
                context.commit("setUserInfo", resp.data.data.userInfo)
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
            logout()
            context.commit("setUserInfo", null);     
            setTimeout(() => {
                // context.commit("setIsLoading", false);
            }, 2000);
        },

        async setPassword(context, payload){
            context.commit("setIsLoading", true);
            setTimeout(() => {
                context.commit("setIsLoading", false);
            }, 2000);

            var resp = await changePassword({
                account : context.state.userInfo.account,
                password: payload
            })
            if(resp.status == 200 && resp.data.status == 0){   
                //修改成功
            }
            return resp.status
        },

        async setNickname(context, payload){
            console.log(payload)
            context.commit("setIsLoading", true);
            setTimeout(() => {
                context.commit("setIsLoading", false);
            }, 2000);
            var resp = await changeNickname({
                account : context.state.userInfo.account,
                nickname: payload
            })
            console.log(resp)
            if(resp.status == 200 && resp.data.status == 0){   
                context.commit("setNickname", payload);     
            }
            else{
                return ;
            }
            
        },
    },
}
