<template>
    <div >
        <div class="info-card row no-wrap">
            <div class="penals col-4">
                <head-card />
                <q-tabs
                v-model="tab"
                vertical
                class="text-teal"
                >
                    <q-tab name="infomation" icon="infomation" label="个人信息" />
                    <q-tab name="history" icon="history" label="历史记录">
                        <q-badge color="orange" floating>{{historyNum}}</q-badge>
                    </q-tab>
                    <q-tab name="bookmark" icon="bookmark" label="我的收藏">
                        <q-badge color="orange" floating>{{favoriteNum}}</q-badge>
                    </q-tab>
                </q-tabs>
            </div>

            <q-separator vertical />
    
            <div class="info-display col-8">
                <q-tab-panels
                v-model="tab"
                animated
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
                >
                <q-tab-panel name="infomation">
                    <div class="text-h4 q-mb-md">修改个人信息</div>
                    <user-info  class="edit-form"/>
                </q-tab-panel>

                <q-tab-panel name="history">
                    <div class="text-h4 q-mb-md">历史记录</div>
                    <div class="text-h1">哈哈，你被骗了，其实我没有历史记录</div>
                </q-tab-panel>

                <q-tab-panel name="bookmark">
                    <div class="text-h4 q-mb-md">我的收藏</div>
                    <!-- 收藏的消息 -->

                    <history-news v-for="news in newsList" :key="news.id" :news="news"/>
                    <div v-if="newsList.length==0" class="text-h5">暂时没有收藏的新闻哦</div>
                </q-tab-panel>
                </q-tab-panels>
            </div>
        </div>
    </div>
</template>

<script>
import headCard from './headCard'
import historyNews from './historyNews'
import userInfo from './userInfo'

import {mapState} from 'vuex'

export default {
    components:{
        headCard,
        historyNews,
        userInfo
    },
    data(){
        return {
            tab: 'infomation',
            splitterModel: 50
        }
    },
    computed:{
        historyNum(){
            return 10;
        },
        favoriteNum(){
            return this.newsList.length ;
        },
        ...mapState('favorite', ['newsList', 'isLoading'])

    },
    props:{
        nickname:{
            default:"nickname"
        },
        account:{
            default:"account"
        }
    }
}
</script>

<style scoped>

.info-card{
    width:100%;
    padding:10px
}
.edit-form{
    padding:10px;
    margin-left:20px
}
.penals{
    width:200px;
    height:800px;
}

.info-display{
    margin-left:40px;
    height:800px;
    /* border:1px black solid */
}
</style>