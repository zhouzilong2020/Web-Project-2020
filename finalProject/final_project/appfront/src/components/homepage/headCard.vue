<template>
    <div class="head-card">
        <!-- 头像、账号、昵称信息 -->
        <div class="head-info row">
            <q-avatar class="avatar" color="primary" text-color="white">J</q-avatar>
            <div class="user-info column">
                <q-label class="nickname text-h5"> {{nickname }} </q-label>
                <q-label class="text-overline"> {{ account }} </q-label>
            </div>
        </div>
        <div class="column">
            <q-badge flat color="primary" >上次登录时间:  {{lastLoginTime}}</q-badge>
            <q-badge outline color="primary">累计浏览次数:  {{totalReadCount}}</q-badge>
        </div>
    </div>
    
</template>

<script>
export default {
    props:{
        nickname:{
            default:"nickname"
        },
        account:{
            default:"account"
        },
        lastLoginTime:{
            default:"2020-08-22"
        },
        totalReadCount:{
            default:"9999"
        }
    }

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