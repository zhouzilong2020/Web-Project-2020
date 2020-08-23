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

            <q-separator vertical  />
    
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
                    <history-news />
                    <history-news />
                    <history-news />
                   
                </q-tab-panel>

                <q-tab-panel name="bookmark">
                    <div class="text-h4 q-mb-md">我的收藏</div>
                    <history-news />
                    <history-news />
                    <history-news />
                    <history-news />
                   
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
            return 10;
        }
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