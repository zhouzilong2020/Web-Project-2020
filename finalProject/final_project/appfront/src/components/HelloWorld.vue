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
    this.$store.dispatch("newsChannel/getNewsChannels")
  }
}
</script>
