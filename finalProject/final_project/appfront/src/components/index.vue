<template>
  <q-page class="index  absolute-center">
    <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        infinite
        autoplay
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ p1 }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ p2 }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ p3 }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    <q-btn-group spread>
      <q-btn color="purple" label="马上登录" icon="homepage" :to="{name:'login'}" />
      <q-btn color="purple" label="现在注册" icon="visibility" :to="{name:'register'}"/>
    </q-btn-group>
  
  
  </q-page>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  data(){
    return {
      slide: 'style',
      p1:'使用GoodRead 一页尽知天下事',
      p2:'一个Web 就是一个宇宙',
      p3:'一节课里可以学到 PHP HTML5 ES6+ JAVASCRIPT 真好！'    
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

<style scoped>
.index{
  max-width: 800px;
  width:80%;
  margin:200px auto;
}
</style>