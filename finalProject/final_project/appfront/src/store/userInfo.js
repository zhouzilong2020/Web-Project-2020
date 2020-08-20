// 登录用户的仓库数据
export default{
    namespaced: true,
    state: {
        userInfo: null,
        token: '',
        isLoading: false,
    },
    mutations: {
        setToken(state, payload) {
            state.token = payload;
        },
        setIsLoading(state, payload){
            state.isLoading = payload;
        },
    },
    actions: {
        // 异步函数
        // context 相当于一个仓库对象
        // payload 是一个负荷
        async loginUser(context){
            context.commit("setIsLoading", true);     
            // var data = await loginUser();
            // console.log(data);
            // if(data.status){
            //     let token = "Bearer " + data.data;
            //     context.commit("setToken", token);      
            // }
            setTimeout(() => {
                context.commit("setIsLoading", false);
            }, 2000);
        }
    },
}
