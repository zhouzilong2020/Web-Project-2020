<template>
    <div class="newsChannel">
        <q-tabs
            v-model="selectedChannel"
            vertical
            class="bg-primary text-white shadow-2"
            active-color="primary"
            active-bg-color="blue-1"
            indicator-color="blue-3"
            
        >
        {{selectedChannel.slice(-1)}}

            <!-- 是用声明式导航 -->
            <q-route-tab 
                v-for="channel in showChannels" 
                :to="{
                    name:'newsPage',  
                    params:{
                        channelId: channel.channelId
                    }
                }"
                transition-show="jump-down" 
                :key="channel.channelId"  
                :label="channel.name" 
                :name="channel.channelId"
                >
                
                <!-- <q-badge color="red" floating>99+</q-badge> -->
                
            </q-route-tab>

        </q-tabs>
        <q-btn unelevated color="primary" :loading="isLoading" class="more" v-if="isCollapsed" icon="more_horiz" @click="handleMoreNews()" />
    </div>

</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            selectedChannel:'',
            isCollapsed: true, // 折叠
            isLoading: false,
        }
    },
    props:{
        initNum:{
            type:Number,
            default:12
        }
    },
    computed:{
        ...mapState('newsChannel', ['newsChannels','curChannel']),
        showChannels(){
            if(this.isCollapsed){
                return this.newsChannels.slice(0, this.initNum);
            }
            else return this.newsChannels
        },
    },
    methods:{
        handleMoreNews(){
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
                this.isCollapsed = false
            }, 2000);
        },
    },
    watch:{
        selectedChannel(){

            this.$store.commit('newsChannel/setCurChannel', this.selectedChannel)
        }

    },
    /**
     * 生命周期函数，创建组件时获取数据
     */
    async created(){
        this.selectedChannel = this.curChannel
    },
    /**
     * 生命周期函数，挂载组件时获取数据
     */
    async mounted(){

    }
}
</script>

<style scoped>
.newsChannel{width:100px}
.more{width:100%; border-radius:0px}
</style>