<template>
    <div class="news-page column flex">
        <div class="news-channels">
            <news-channel :channels="channels" @channelChange="channelChange"/>
        </div>

        <div class="news-cards flex justify-around ietms-center" >
            <news-card class="news-card" v-for="news in newsList" :key="news.id" :news="news" />
        </div>
       
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
            newsList:[],
            selectedChannel:""
        }
    },
    methods:{
        async channelChange(channelId){
            this.selectedChannel = channelId;
            var respNews = await getNews(channelId)
            this.console
            this.newsList = respNews.contentlist
        }
    },
    /**
     * 调用api服务，获取数据
     */
    async created(){
        // 返回的频道数据
        var respChannel = await getNewsChannels();
        this.channels = respChannel;
    },
    async mounted(){
        // 返回的新闻数据
        var respNews = await getNews(this.selectedChannel)
        this.newsList = respNews.contentlist
        console.log(respNews)
    }
}
</script>

<style scoped>
.news-channels{float: left; max-width: 100px;}
.news-cards{float: left; max-width: 85%; position: absolute; left:100px; top:50px}
.news-card{display:inline;}
</style>