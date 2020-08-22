<template>
    <div>
        <div class="news-page row ">
            <div class="news-channels">
                <news-channel :channels="channels" @channelChange="channelChange"/>
            </div>
            <div class=" news-cards flex justify-around ietms-center bg-grey-1" >
                <news-card class="news-card" v-for="news in newsList.contentlist" :key="news.id" :news="news" />
            </div>       
        </div>
        <div class="q-pa-lg flex flex-center pager">
                <q-pagination
                v-model="currentPage"
                color="primary"
                :max="newsList.allPages"
                :max-pages="6"
                :boundary-numbers="true"
                @click="handlePager()"
                >
                </q-pagination>
        </div>
        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="primary" />
        </q-page-scroller>
    </div>
</template>

<script>
import newsCard from "../components/news/newsCard"
import newsChannel from "../components/news/newsChannel"

import {getNewsChannels, getNews} from '../services/newsServices'

export default {
    components:{
        newsCard,
        newsChannel,
    },
    data(){
        return {
            channels:[],
            newsList:null,
            selectedChannel:"",
            currentPage:1,
        }
    },
    methods:{
        async channelChange(channelId){
            this.selectedChannel = channelId;
            var respNews = await getNews(channelId)
            console.log(respNews)
            this.newsList = respNews
        },
        async handlePager(){
            var respNews = await getNews(this.selectedChannel, this.currentPage)
            this.newsList = respNews
            this.document.body.scrollTop=0
        },

    },
    /**
     * 调用api服务，获取数据
     */
    async created(){
        // 返回的频道数据
        var respChannel = await getNewsChannels();
        this.channels = respChannel;
        this.selectedChannel = respChannel[0].channelId
    },
    async mounted(){
        // 返回的新闻数据
        var respNews = await getNews(this.selectedChannel)
        this.newsList = respNews
        console.log(respNews)
    }
}
</script>

<style scoped>
.news-channels{float: left; max-width: 15%; margin-top:0px}
.news-cards{max-width: 85%;  border: 3px solid white; margin:0 auto; border-radius: 20px;}
.news-pagination{bottom: 0px; float: left;}
</style>