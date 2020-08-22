<template>
    <q-card class="fixed-center login-form bg-grey text-white">
        <q-card-section class="head">
            <div class="head-title text-h4">GoodRead</div>
            <div class="head-subtitle text-subtitle2">身份认证</div>
        </q-card-section>

        <q-card-section class="login-form-input">
            <q-input outlined v-model="account" label="用户名" :rules="[val => !!val || '请输入用户名']" @input="isValidate">
                <template v-slot:prepend>
                    <q-icon name="person" />
                </template>
            </q-input>
            <q-input outlined v-model="password" type="password" label="密码" :rules="[val => !!val || '请输入用户名']" @input="isValidate">
                <template v-slot:prepend>
                    <q-icon name="apps" />
                </template>
            </q-input>
        </q-card-section>

        <q-icon class="refund" name="cached">找回密码</q-icon>
        
        <q-card-actions class="login-form-bottom">
            <q-toggle class="accept-term" v-model="accept" label="I accept the license and terms" @input="isValidate"/>
            <q-btn :disable="disable" border color="primary" class="full-width" @click="handleLogin()" >登录</q-btn>
        </q-card-actions>

        <!-- 加载 -->
        <q-inner-loading :showing="isLoading">
            <q-spinner size="50px" color="primary" />
        </q-inner-loading>

        <!-- 警告提示 -->
        <!-- <dialog :showDialog="showDialog"  :mes="a" > </dialog> -->
    </q-card>
    
</template>

<script>
import {mapState} from "vuex"
// import dialog from "../dialog"

export default {
    components:{
        // dialog
    },
    data(){
        return{
            account:'',
            password:'',
            accept:false,
            disable:true,
            showDialog:false,
        }
    },
    methods:{
        isValidate(){
            if(this.account.length > 0 && this.password.length > 0 && this.accept){
                this.disable = false;
            }
            else this.disable = true;
        },
        async handleLogin(){
            var payload = {
                account : this.account,
                password : this.password
            }
            this.$store.dispatch("userInfo/loginUser",payload).then(()=>{
                if(this.userInfo && this.isLoading){
                    this.$router.push({
                        name:"newsPage"
                        
                    })
                }
            }).catch((err) =>{
                console.log(err)
                this.showDialog = true
            })
        },
    },
    computed: mapState("userInfo", ["isLoading", "userInfo"]),

}
</script>

<style scoped>
.head {text-align: center;padding:25px}
.head-subtitle{padding-top:10px}


.login-form{width:320px; height: 480px;  position: center;}
.login-form .login-form-input{width:300px; margin: 0 auto;}

.login-form .refund {padding-left:30px; font-size:1em;}
.login-form .login-form-bottom {position: relative; top:10px}

.login-form .login-form-bottom .accept-term{margin:0 auto; padding-bottom: 20px;}

</style>