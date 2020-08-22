<template>
    <q-card class="reg-form bg-grey text-white">
        <q-card-section class="head">
            <div class="head-title text-h4">GoodRead</div>
            <div class="head-subtitle text-subtitle2">注册用户</div>
        </q-card-section>



        <q-card-section class="reg-form-input">
            <q-input outlined v-model="account" label="用户名" :rules="[val => !!val || '请输入用户名']" @input="isValidate">
                <template v-slot:prepend>
                    <q-icon name="person" />
                </template>
            </q-input>
            <q-input outlined v-model="nickname" label="昵称" :rules="[val => !!val || '请输入昵称']" @input="isValidate">
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

        <q-card-actions class="reg-form-bottom">
            <q-toggle class="accept-term" v-model="accept" label="I accept the license and terms" @input="isValidate"/>
            <q-btn :disable="disable" border color="primary" class="full-width" @click="handleReg()" >注册</q-btn>
        </q-card-actions>
    </q-card>
</template>

<script>
import {register} from '../../services/userService'
export default {
    data(){
        return{
            account:'',
            nickname:'',
            password:'',
            accept:false,
            disable:true,
        }
    },
    methods:{
        isValidate(){
            if(this.nickname > 0 && this.account.length > 0 && this.password.length > 0 && this.accept){
                this.disable = false;
            }
            else this.disable = true;
        },
        async handleReg(){
            var resp = await register({
                account : this.account,
                password : this.password,
                nickname : this.nickname,
            });
            // 注册失败
            if(resp.status){
                console.log("reg fail", resp);
                // TODO 加入到store里面
            }
            else{
                console.log("reg success", resp);
                // TODO 加入到store里面
            }
        }
    }
}
</script>

<style scoped>
.head {text-align: center;padding:25px}
.head-subtitle{padding-top:10px}

.reg-form{width:320px; height: 480px}
.reg-form .reg-form-input{width:300px; margin: 0 auto; position: relative; top:-25px}

.reg-form .reg-form-bottom {position: relative; top:-35px}

.reg-form .reg-form-bottom .accept-term{margin:0 auto; padding-bottom: 20px;}

</style>