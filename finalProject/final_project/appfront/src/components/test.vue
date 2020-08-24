<template>
  <q-page class="flex flex-center">
    
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      
    }
  },
  methods:{
   
  },
  mounted(){
    // this.$store.dispatch('favorite/getNewsList',{account:11})
    this.$store.dispatch('favorite/addNews',{account:11, newsID:1231213})
    // this.$store.dispatch('favorite/removeNews',{id:2})
    //  this.$store.dispatch('favorite/getNewsList',{account:11})
  }
}
</script>
