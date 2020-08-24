<template>
    <div class="head-card">
        <!-- 头像、账号、昵称信息 -->
        <div>
            <transition
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            >

                <div class="head-info row">
                    <q-avatar class="avatar" color="primary" text-color="white">{{userInfo.nickname[0]}}</q-avatar>
                    <div class="user-info column">
                        <q-label name="nickname" class="nickname text-h6"> {{userInfo.nickname }} </q-label>
                        <q-label name="account" class="account text-overline"> {{ userInfo.account }} </q-label>
                    </div>
                </div>
            </transition>
            
            <q-inner-loading :showing="isLoading">
                <q-spinner-gears size="50px" color="primary" />
            </q-inner-loading>
        </div>
        
        <div class="column info">
            <q-badge flat color="primary" >上次登录时间:  {{userInfo.lastLogDate.slice(0, 10)}}</q-badge>
            <q-badge outline color="primary">累计浏览次数:  {{userInfo.totalReadCount}}</q-badge>
        </div>
    </div>
    
</template>

<script>
import {mapState} from "vuex"
export default {
    computed: mapState('userInfo', ['userInfo','isLoading']),
}
</script>

<style scoped lang="scss">
@import '../../styles/quasar.variables';

.head-card{
    border: 1px $primary solid;
    border-radius: 10px;
    padding:10px;
}
.head-info{
    padding-bottom:15px;
    .avatar{
        padding-top:10px;
        margin-right: 10px;
    }
    .user-info{
        .nickname{
            padding:0;
            margin-top:5px;
        }
        .account{
            line-height:1rem;
        }
    }
}
</style>