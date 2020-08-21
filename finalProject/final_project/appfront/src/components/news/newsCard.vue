<template>
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="news-card bg-brown-1" flat bordered>
            <q-img
                class="image"
                v-if="news.havePic"
                :src="news.imageurls[0].url"
            />
            <q-card-section >
                <!-- 新闻标题 -->
                <div class="text-h5 q-mt-sm q-mb-xs"> <a :href="news.link" target="_blank">{{news.title}}</a></div>
                <!-- 来源 -->
                <div class="text-subtitle2 q-mt-sm q-mb-xs">来源:{{news.source}}</div>
                <!-- 发布日期 -->
                <div class="text-overline text-orange-9">{{news.pubDate}}</div>
                <!-- 概要 -->
                <div class="text-caption text-grey" v-if="!news.havePic" >{{content}}</div>
            </q-card-section>

            <!-- 加载特效 -->
            <q-card-actions>
                <q-btn flat color="brown-10" icon="share" />
                <q-btn flat color="amber-13" icon="bookmark" />
                <q-space />
                <q-btn
                color="grey"
                round
                flat
                dense
                icon="more"
                @click="expanded = !expanded"
                />
            </q-card-actions>

            <q-separator />


            <q-dialog v-model="expanded">
                <q-card>
                    <q-card-section>
                    <div class="news-content text-h4">新闻正文</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        <div key="content" v-if="news.allList.length>0">
                            <div v-show="expanded"  v-for="(list,i) in news.allList" :key="i">
                                <div  v-if="typeof(list) == 'string'" class="news-content text-caption">
                                    {{"  " + list}}
                                </div>
                            </div>
                        </div>
                        <div key="empty">
                            <div v-show="expanded" class="news-content text-caption">
                                没有更多啦！
                            </div>
                        </div>    
                    </q-card-section>
                    <q-card-actions align="right">
                    <q-btn flat icon="close" color="black" v-close-popup />
                    </q-card-actions>
                </q-card>
            </q-dialog>

            <!-- 整个卡片的加载效果 -->
            <q-inner-loading :showing="isLoading">
                <q-spinner-gears size="50px" color="primary" />
            </q-inner-loading>

        </q-card>
    </div>
</template>

<script>

export default {
    data () {
        return {
            expanded: false,
            isLoading: false,
        }
    },
    props:{
        news:{
            type:Object,
        }
    },
    computed:{
        /**
         * 在头部显示的概要不超过100个字
         */
        content(){
            var newsContent = ""
            for(let i = 0, len = this.news.allList.length; i < len; i++){
                if(typeof(this.news.allList[i])=="string"){
                    if(newsContent.length + this.news.allList[i].length > 200){
                        break
                    }
                    newsContent += this.news.allList[i]
                }
            }
            return newsContent
        }
    },
    /**
     * 创建
     */
    created(){
        this.isLoading = true
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    }


}
</script>

<style scoped>
a {color:#07519A; text-decoration: none}a:hover {color: #FF6600; text-decoration: underline}
.news-card{
  width: 100%;
  max-width: 350px;
}
.image{
    width:100%;
    max-height: 250px
}
.news-content, .heading { padding: 5px 15px;}
</style>