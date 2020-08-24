<template>
    <div class=" q-gutter-md input-form">
        <q-input v-model="nickname" label="昵称"/>
        <q-btn class="full-width" color="primary" :loading="isLoading" :disable="n_IsValide" @click="handleNicknameClick">
            确定
        </q-btn>
        <q-input v-model="password" type="password"  label="密码" />
        <q-btn class="full-width" color="primary" :loading="isLoading" :disable="p_IsValide" @click="handlePasswordClick" >
            确定
        </q-btn>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            nickname:'',
            password:''
        }
    },
    computed: {
        ...mapState('userInfo', ['isLoading', 'userInfo']),
        n_IsValide(){
            if(
                this.nickname == this.userInfo.nickname ||      //修改名字应该不一样
                this.nickname.length == 0                       //长度大于零
            ){
                return true
            }
            return false
        }, 
        p_IsValide(){
            if(this.password.length == 0){
                return true
            }
            return false
        },
    },
    methods:{
        handlePasswordClick(){
            this.$store.dispatch('userInfo/setPassword', this.password)
            this.password = ''
        },
        handleNicknameClick(){
            this.$store.dispatch('userInfo/setNickname', this.nickname)
            this.nickname = ''
        }
    }
}
</script>

<style scoped>
.input-form{
    max-width:300px
}

</style>