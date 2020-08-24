<template>
    <div>
        <div class="news-page row ">
            <div class="news-channels">
                <news-channel/>
            </div>
            <div class="news-cards flex justify-around ietms-center bg-grey-1" >
                <news-card class="news-card" v-for="news in newsList.contentlist" :key="news.id" :news="news" />
            </div>       
        </div>
        <div class="q-pa-lg flex pager">
            {{screenHeight}}

            <q-page-scroller position="bottom" :scroll-offset="screenHeight-1000" :offset="[18, 18]">
                <q-pagination
                v-model="curPage"
                color="primary"
                :max="newsList.allPages"
                :max-pages="8"
                :boundary-numbers="true"
                @click="handlePager()"
                >
                </q-pagination>
            </q-page-scroller>

        </div>
        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="primary" />
        </q-page-scroller>
    </div>
</template>

<script>
import newsCard from "../components/news/newsCard"
import newsChannel from "../components/news/newsChannel"

import {getNews} from '../services/newsServices'
import {mapState} from 'vuex'

export default {
    components:{
        newsCard,
        newsChannel,
    },
    data(){
        return {
            newsList:{},
            curPage:1,
        }
    },
    computed:{ 
        ...mapState('newsChannel', ['curChannel']),
        screenHeight(){
            return document.body.clientHeight
        }
    },
    watch:{
        async curChannel(){//检测当前页面是否变化，如果变化，则调整相应内容
            // 新频道从第一页开始
            this.curPage = 1
            var respNews = await getNews(this.curChannel, 1)
            this.newsList = respNews
        }
    },
    methods:{
        async handlePager(){
            var respNews = await getNews(this.curChannel, this.curPage)
            this.newsList = respNews
        },
    },
    /**
     * 调用api服务，获取数据
     */
    async created(){
        // 返回的新闻数据
        getNews(this.curChannel, this.curPage).then((resp) =>{
            this.newsList = resp
            console.log("news",resp)
        })
    },
    async mounted(){
        
    }
}
</script>

<style scoped>
.news-channels{float: left; max-width: 15%; margin-top:0px}
.news-cards{max-width: 85%;  border: 3px solid white; margin:0 auto; border-radius: 20px;}
.news-pagination{bottom: 0px; float: left;}
.pager{margin-top: 40px;}
</style>