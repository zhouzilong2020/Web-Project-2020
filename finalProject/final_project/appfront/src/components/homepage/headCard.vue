<template>
    <div class="head-card">
        <!-- 头像、账号、昵称信息 -->
        <div class="head-info row">
            <q-avatar class="avatar" color="primary" text-color="white">{{userInfo.nickname[0]}}</q-avatar>
            <div class="user-info column">
                <q-label class="nickname text-h5"> {{userInfo.nickname }} </q-label>
                <q-label class="account text-overline"> {{ userInfo.account }} </q-label>
            </div>
        </div>
        <div class="column info">
            <q-badge flat color="primary" >上次登录时间:  {{userInfo.lastLoginTime}}</q-badge>
            <q-badge outline color="primary">累计浏览次数:  {{userInfo.totalReadCount}}</q-badge>
        </div>
    </div>
    
</template>

<script>
import {mapState} from "vuex"
export default {
    computed: mapState('userInfo', ['userInfo']),
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