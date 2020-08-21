import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import store from './store/index'
import './quasar'

// import {loginUser} './services/userService'

// loginUser({
//   account:
// });


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
