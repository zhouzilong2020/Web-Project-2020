import Vue from 'vue'
import vuex from 'vuex'

import userInfo from './userInfo'
import newsChannel from './newsChannel'
import favorite from './favorite'
Vue.use(vuex)

// 一个仓库对象，存放所有的共享数据
var store = new vuex.Store({
    modules: {
        userInfo, //用户信息
        newsChannel, //新闻频道
        favorite, //用户收藏
   },
});

export default store;