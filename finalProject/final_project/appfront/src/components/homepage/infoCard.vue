<template>
    <div class="absolute-center">
       <template>
            <div>
                <q-splitter
                v-model="splitterModel"
                style="height: 350px"
                >

                    <template v-slot:before>
                        <q-tabs
                        v-model="tab"
                        vertical
                        class="text-teal"
                        >
                                <q-tab name="mails" icon="mail" label="个人信息" />
                                <q-tab name="alarms" icon="alarm" label="Alarms" />
                                <q-tab name="movies" icon="movie" label="Movies" />
                                </q-tabs>
                    </template>

                    <template v-slot:after>
                        <q-tab-panels
                        v-model="tab"
                        animated
                        transition-prev="jump-up"
                        transition-next="jump-up"
                        >
                        <q-tab-panel name="mails">
                            <div class="text-h4 q-mb-md">Mails</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                        </q-tab-panel>

                        <q-tab-panel name="alarms">
                            <div class="text-h4 q-mb-md">Alarms</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                        </q-tab-panel>

                        <q-tab-panel name="movies">
                            <div class="text-h4 q-mb-md">Movies</div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                        </q-tab-panel>
                        </q-tab-panels>
                    </template>
                </q-splitter>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data(){
        return {
             tab: 'mails',
            splitterModel: 20
        }
    },
    props:{
        nickname:{
            default:"nickname"
        },
        account:{
            default:"account"
        }
    }

}
</script>

<style scoped>
.infoCard{
  width: 100%;
  
}

.indicator{
    padding:0;
    margin:0 auto;
    border:0;
}
.info{
    width: 500px;
}
</style>