<template>
  <q-page class="flex flex-center">
    <ul>
      <li v-for="(user, i) in users" :key=i >
        {{i}}----{{user.nickname}}----{{user.account}}
      </li>
    </ul>
    <form action="" class="column justify-evenly">
      nickname<input type="text" placeholder="nickname" v-model="inputUser.nickname"><br>
      account<input type="text" placeholder="account" v-model="inputUser.account"><br>
      password<input type="text" placeholder="password" v-model="inputUser.password"><br>
      <q-btn type="submit" @click="userSubmit()">submit</q-btn>
    </form>
    <q-btn @click="userSubmit()">submit</q-btn>
  </q-page>






</template>

<style>
</style>

<script>
import {getUser, postUser} from '../api/api'
export default {
  name: 'HelloWorld',
  data(){
    return {
      users:[],
      inputUser:{
        "nickname":"",
        "account":"",
        "password":"",
      }
    }
  },
  methods:{
    loadUser(){
      getUser().then(resp => {
        this.users = resp.data;
      })
    },
    userSubmit(){
      postUser(this.inputUser.nickname, this.inputUser.account, this.inputUser.password).then(resp => {
        console.log(resp)
        this.loadUser()//更新用户信息
      })
    }
  },
  mounted(){
    this.loadUser();
  }
}
</script>
