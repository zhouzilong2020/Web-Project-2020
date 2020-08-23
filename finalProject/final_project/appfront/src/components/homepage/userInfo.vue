<template>
    <div class=" q-gutter-md input-form">
        <q-input v-model="nickname" label="昵称"/>
        <q-btn class="full-width" color="primary">
            确定
        </q-btn>
        <q-input v-model="password" type="password"  label="密码" />
        <q-btn class="full-width" color="primary">
            确定
        </q-btn>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nickname:'',
            password:''
        }
    }
}
</script>

<style scoped>
.input-form{
    max-width:300px
}

</style>