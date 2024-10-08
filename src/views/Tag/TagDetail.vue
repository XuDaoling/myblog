<template>
  <Front :obj="{
    title: route.params.tagName,
    content: '',
    url:''
  }" />
  <div class="outer">
    <Articles v-if="articleList.length > 0" :pageNum="pageNum" :articleList="articleList" />
      <div class="right" v-else>
        <!-- 可在这里添加加载状态或提示 -->
        <p>{{ msg }}</p>
      </div>
  </div>
</template>

<script setup>
import { useArticleStore } from '@/stores/index'
import { useRouter,useRoute } from 'vue-router';

import Front from '@/components/Front.vue';
import Articles from '@/components/Articles.vue';
import { ref,onMounted } from 'vue';
import { getTagDetail } from '@/api/articles';

const msg = ref('正在加载文章...')

const pageNum = ref(1)

const route = useRoute()
const router = useRouter()

const articleList = ref([])


onMounted(()=>{
  console.log(route.params.tagId,pageNum.value)
  getTagDetail({
    tagId: route.params.tagId,
    pageNum: pageNum.value
  }).then(ref => {
    articleList.value = ref.data.data.list;
  }).catch(error => {
    console.error(error)
    msg.value = '文章加载失败，不存在相关文章'
  })
})

</script>

<style lang="scss" scoped>
.outer{
  width: 100%;
  height: 100%;
  // background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  .right{
    width: 500px;
    height: 400px;
    background: rgba(255, 255, 255, 0.4); /* 半透明背景 */
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* 阴影效果 */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 40%;
  }
}
</style>