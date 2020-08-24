<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white header" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          Good·Read 
        </q-toolbar-title>

        <q-btn-group flat v-if="!userInfo" class="header-options">
          <q-btn class="header-option" outline color="wight" label="登录" :to="{name:'login'}" />
          <q-btn class="header-option" outline color="wight" label="注册" :to="{name:'register'}" />
        </q-btn-group>

        <template v-if="userInfo">
          <q-toolbar-title class="text-subtitle2 text-right" v-if="userInfo&&!isLoading">
            欢迎你！{{userInfo.nickname}}
          </q-toolbar-title>
          <q-btn-group flat class="header-options">
            <q-btn class="header-option" outline color="wight" label="个人主页"/>
            <q-btn class="header-option" outline color="wight" label="热点新闻"  />
            <q-btn class="header-option" outline color="wight" label="退出登录" @click="handleLogout()" />
          </q-btn-group>
        </template>
      </q-toolbar>
    </q-header>

    <!-- 插入 -->
    <q-page-container dark>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import {mapState} from "vuex"

export default {
  data () {
    return {
    }
  },
  computed: mapState("userInfo", ["userInfo", "isLoading"]),
  methods:{
    handleLogout(){
      this.$store.dispatch("userInfo/logoutUser").then(() =>{
        this.$router.push({
            name:"index"
        })
      })

    }
  }
}
</script>


<style scoped>
.header .header-option{ margin: 0 10px}
.header-options{position:relative}
.body{background-color: black;}
</style>