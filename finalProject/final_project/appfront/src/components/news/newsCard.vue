<template>
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="news-card bg-brown-1" flat bordered>
            <q-img
                class="image"
                v-if="news.havePic"
                :src="news.imageurls[0].url"
            />
            <q-card-section>
                <!-- 新闻标题 -->
                <div class="text-h5 q-mt-sm q-mb-xs">{{news.title}}</div>
                <!-- 来源 -->
                <div class="text-subtitle2 q-mt-sm q-mb-xs">来源:{{news.source}}</div>
                <!-- 发布日期 -->
                <div class="text-overline text-orange-9">{{news.pubDate}}</div>
                <!-- 概要 -->
                <div class="text-caption text-grey">{{content}}</div>
            </q-card-section>

            <!-- 加载特效 -->
            <q-card-actions>
                <q-btn flat color="brown-10" icon="share" />
                <q-btn flat color="amber-13" icon="bookmark" />
                <q-space />
                <q-btn
                color="grey"
                round
                flat
                dense
                :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="expanded = !expanded"
                />
            </q-card-actions>

            <q-separator />

            <transition-group 
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            >
                <div key="content" >
                    <div v-show="expanded" v-for="(list,i) in news.allList" :key="i">
                        <div  v-if="typeof(list) == 'string'" class="news-content text-caption">
                            {{"  " + list}}
                        </div>
                    </div>
                </div>
            </transition-group>

        </q-card>
    </div>
</template>

<script>
import {getNews} from "../../services/newsServices"
export default {
    data () {
        return {
            expanded: false,
            // newsList : null,
            // news: null,
            // content:"",
        }
    },
    props:{
        news:{
            type:Object,
        }
    },
    computed:{
        /**
         * 在头部显示的概要不超过100个字
         */
        content(){
            var newsContent = ""
            for(let i = 0, len = this.news.allList.length; i < len; i++){
                if(typeof(this.news.allList[i])=="string"){
                    if(newsContent.length + this.news.allList[i].length > 100){
                        break
                    }
                    newsContent += this.news.allList[i]
                }
            }
            return newsContent
        }
    },
    /**
     * 创建
     */
    async created(){
        var resp = await getNews('5572a108b3cdc86cf39001cd')
        this.newsList = resp
        this.news = resp.contentlist[6]
        for(let i = 0, len = this.news.allList.length; i < len; i++){
            if(typeof(this.news.allList[i])=="string"){
                if(this.content.length + this.news.allList[i].length > 100){
                    break
                }
                this.content += this.news.allList[i]
            }
        }
        console.log(this.news)
    }


}
</script>

<style scoped>
.news-card{
  width: 100%;
  max-width: 350px
}
.image{
    width:100%;
    max-height: 250px
}
.news-content, .heading { padding: 5px 15px;}
</style>