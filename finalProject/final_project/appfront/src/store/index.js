import Vue from 'vue'
import vuex from 'vuex'

import userInfo from './userInfo'

Vue.use(vuex)

// 一个仓库对象，存放所有的共享数据
var store = new vuex.Store({
    modules: {
        userInfo, //用户信息
   },
});

export default store;