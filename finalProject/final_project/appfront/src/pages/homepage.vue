<template>
  <div>
    <info-card/>
  </div>
</template>

<script>
import infoCard from "../components/homepage/infoCard"
import {mapState} from 'vuex'
export default {
  components:{
    infoCard
  },
  computed: mapState('userInfo', ['userInfo']),
  
  created(){
    this.$store.dispatch('favorite/getNewsList',{
      account: this.userInfo.account
    })
  }

}
</script>

<style>

</style>