<template>
  <q-dialog v-model="showDialog">
    <q-card>
      <q-card-section>
        <div class="text-red text-h6 text-center">警告</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{mes}}
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props:{
      showDialog:{
        type:Boolean,
        default:false,
      },
      mes:{
        type:String,
      }
  }
}
</script>

<style>

</style>