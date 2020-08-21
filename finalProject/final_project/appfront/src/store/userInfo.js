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
        async loginUser(context){
            context.commit("setIsLoading", true);     
            setTimeout(() => {
                context.commit("setIsLoading", false);
            }, 2000);
        }
    },
}
