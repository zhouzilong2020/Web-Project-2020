<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white header" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          Good·Read 
        </q-toolbar-title>
            <q-btn class="header-option" outline color="wight" label="登录" :to="{name:'login'}" />
            <q-btn class="header-option" outline color="wight" label="注册" :to="{name:'register'}" />
        </q-toolbar>
    </q-header>

    <q-page-container dark>
        <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>


<style scoped>
.header .header-option{ margin: 0 10px}
.body{background-color: black;}
</style>