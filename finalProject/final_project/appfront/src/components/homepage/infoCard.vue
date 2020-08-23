<template>
    <div class="absolute-center">

       <template>
            <div>
                <q-splitter
                v-model="splitterModel"
                style="height: 500px"
                >

                    <template v-slot:before>
                        <div class="left">
                            <head-card />
                            <q-tabs
                            v-model="tab"
                            vertical
                            class="text-teal"
                            >
                                <q-tab name="mails" icon="mail" label="" />
                                <q-tab name="alarms" icon="alarm" label="Alarms" />
                                <q-tab name="movies" icon="movie" label="Movies" />
                            </q-tabs>
                        </div>
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
import headCard from './headCard'
export default {
    components:{
        headCard
    },
    data(){
        return {
            tab: 'mails',
            splitterModel: 50
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

.left{
    width:200px
}
</style>