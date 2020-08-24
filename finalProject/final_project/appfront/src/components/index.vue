<template>
  <q-page class="flex flex-center">
    
  </q-page>
</template>

<style>
</style>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  data(){
    return {
      
    }
  },
  computed: mapState('userInfo', ['userInfo']),
  async created(){
    await this.$store.dispatch('userInfo/whoAmI')
    if(this.userInfo){  //如果登录成功，则自动跳转到个人主页
      setTimeout(() => {
        this.$router.push({
            name:"homepage",
            params:{
                account:this.userInfo.account,
            }
        })
      }, 1000);
    }
  }
}
</script>
