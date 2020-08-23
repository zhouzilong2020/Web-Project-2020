<template>
  <div>
    <q-card class="history-news" flat bordered>
      <q-card-section horizontal>

        <q-card-section class="q-pt-xs">
          <div class="text-overline">{{news.pubDate}}</div>
          <div class="text-h5 q-mt-sm q-mb-xs"><a :href="news.link" target="_blank">{{news.title}}</a></div>
          <div class="text-subtitle2 q-mt-sm q-mb-xs">来源:{{news.source}}</div>
          <div class="text-caption text-grey">
            {{content + "..."}}
          </div>
        </q-card-section>


        <q-card-section v-if="news.havePic" class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            :src="news.img"
          />
        </q-card-section>
        <q-card-actions vertical class="justify-start">
            <q-btn size="12px" flat dense round icon="more_vert" @click="fullContent = true"/>
            <q-btn flat round  icon="delete" />
          </q-card-actions>
      </q-card-section>
    </q-card>

    <!-- 消息全文 -->
    <q-dialog v-model="fullContent">
        <q-card>
          <q-toolbar>
            <q-avatar class="avatar" color="primary" text-color="white">N</q-avatar>
            <q-toolbar-title><span class="text-weight-bold">新闻正文</span></q-toolbar-title>
            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>
          <q-card-section>
            <div class="text-justify full-content">{{"    " + news.content}}</div>
          </q-card-section>
        </q-card>
    </q-dialog>
  </div>
</template>

<script>

export default {
  data(){
    return {
      fullContent:false
    }
  },
  props:{
    news:{
      type:Object,
      default(){
        return{
          pubDate:"2020-08-01",
          title:"震惊！震惊！震惊！震惊！",
          content:"震惊！震惊！震惊！震惊！震惊！震惊！震惊！震惊！震惊！震惊！震惊！震惊！震惊！震惊！",
          source:"哈哈网"
        }
      }
    }
  },
  computed:{
    content(){
      // 根据有无图片计算概要字数
      if(this.news.havePic){
        return this.news.content.slice(0, 100)
      }
      else{
        return this.news.content.slice(0, 230)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.history-news{
  width: 100%;
  max-width: 700px;
  max-height:300px;
}
.full-content{
  line-height: 28px;
}
a {color:#07519A; text-decoration: none}a:hover {color: #FF6600; text-decoration: underline}
</style>