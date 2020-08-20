<template>
    <div class="newsChannel">
        <q-tabs
            v-model="selectedChannel"
            vertical
            
            class="bg-primary text-white shadow-2"
        >
            <q-tab  transition-show="jump-down" v-for="channel in showChannels" :key="channel.id"  :label="channel.name">
                <!-- <q-badge color="red" floating>99+</q-badge> -->
                
            </q-tab>

        </q-tabs>

        <q-btn unelevated color="primary" :loading="isLoading" class="more" v-if="isCollapsed" icon="more_horiz" @click="handleMoreNews" />


        
    </div>

</template>

<script>
import {getNewsChannels} from '../../services/newsServices'

export default {
    data(){
        return{
            channels:[],
            selectedChannel:'',
            isCollapsed: true, // 少现实一些数据
            isLoading: false,
        }
    },
    computed:{
        showChannels(){
            if(this.isCollapsed){
                return this.channels.slice(0, 8);
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
        }
    },
    /**
     * 生命周期函数，创建组件时获取数据
     */
    async created(){
        var resp = await getNewsChannels();
        this.channels = resp;
    },
    /**
     * 生命周期函数，创建组件时获取数据
     */
    mounted(){

    }

}
</script>

<style scoped>
.newsChannel{width:100px}
.more{width:100%; border-radius:0px}

</style>