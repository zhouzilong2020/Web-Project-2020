<template>
    <div class="newsChannel">
        <q-tabs
            v-model="selectedChannel"
            vertical
            class="bg-primary text-white shadow-2"
            active-color="primary"
            active-bg-color="blue-1"
            indicator-color="blue-3"
            @click="handleChange()"
        >
            <!-- 是用声明式导航 -->
            <q-route-tab 
            :to="{
                name:'newsPage',  
                params:{
                    channelId: channel.channelId
                }

            }" 
            transition-show="jump-down" v-for="channel in showChannels" :key="channel.id"  :label="channel.name" :name="channel.channelId">
                <!-- <q-badge color="red" floating>99+</q-badge> -->
            </q-route-tab>
        </q-tabs>
        <q-btn unelevated color="primary" :loading="isLoading" class="more" v-if="isCollapsed" icon="more_horiz" @click="handleMoreNews" />
    </div>

</template>

<script>
export default {
    data(){
        return{
            selectedChannel:'',
            isCollapsed: true, // 折叠
            isLoading: false,
        }
    },
    props:{
        channels:{
            type: Array
        },
        initNum:{
            type:Number,
            default:12
        }
    },
    computed:{
        showChannels(){
            if(this.isCollapsed){
                return this.channels.slice(0, this.initNum);
            }
            else return this.channels
        }
    },
    methods:{
        handleMoreNews(){
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
                this.isCollapsed = false
            }, 2000);
        },
        handleChange(){
            this.$emit('channelChange', this.selectedChannel)
        }
    },
    /**
     * 生命周期函数，创建组件时获取数据
     */
    async created(){

    },
    /**
     * 生命周期函数，挂载组件时获取数据
     */
    async mounted(){
        this.selectedChannel = this.channels[0].channelId
        this.$emit('channelChange', this.selectedChannel)
    }

}
</script>

<style scoped>
.newsChannel{width:100px}
.more{width:100%; border-radius:0px}

</style>