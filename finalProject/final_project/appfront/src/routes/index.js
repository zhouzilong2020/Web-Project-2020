import VueRouter from "vue-router"
import Vue from "vue"
import config from "./config"

// 安装vuerouter
Vue.use(VueRouter)
// 路由对象
var router = new VueRouter(config);

export default router;