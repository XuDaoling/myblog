<template>
  <div class="fa">
    <div class="nav" v-if="articleList.length > 0">
      <div class="title bx">标题</div>
      <div class="tags bx">标签</div>
      <div class="op bx">操作</div>
    </div>
    <div v-if="articleList.length > 0" class="every" v-for="item in articleList">
      <div class="title box"><div class="p"><p>{{ item.title }}</p></div></div>
      <div class="tags box">
        <div class="eve" v-for="it in item.tags">{{ it.tagName }}，</div>
      </div>
      <div class="op box">
        <el-button class="ce" @click="read(item.id)" type="success">查看</el-button>
      </div>
    </div>

    <div class="right" v-else>
        <!-- 可在这里添加加载状态或提示 -->
      <p>{{ msg }}</p>
    </div>

  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';

import { getHistoryArticles } from '@/api/articles';
import { useRouter } from 'vue-router';
const msg = ref('加载中，请稍等')

const articleList = ref([])
const pageNum = ref(1)

const router = useRouter()

function read(id) {
  router.push(`/article/${id}`)
}

onMounted(()=>{
  getHistoryArticles(pageNum.value).then(res => {
  articleList.value = res.data.data.list;
  if(articleList.value.length === 0){
    msg.value = '暂无历史记录'
  } // 确保在没有数据时是空数组
  console.log(res.data.data);
  console.log(articleList.value);
}).catch(error => {
  console.error('获取文章列表失败:', error);
});
})

</script>

<style lang="scss" scoped>



.fa{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .right{
    width: 900px;
    height: 200px;
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
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    background: rgba(255, 255, 255, 0.1);
  }
}
.nav{
  width: 1300px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  .bx{
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    background: rgba(255, 255, 255, 0.4);
  }
  .title{
    width: 400px;
    height: 100%;

  }
  .tags{
    width: 400px;
    height: 100%;
  }
  .op{
    width: 480px;
    height: 100%;
  }
}
.every{
  height: 100px;
  width: 1300px;
  margin: 10px 0 0 0;
  // background-color: #fff;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  .box{
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    background: rgba(255, 255, 255, 0.2);
  }
  .title{
    width: 400px;
    height: 100%;
    // background-color: aqua;
    .p{
      font-size: 20px;
    }
  }
  .tags{
    width: 400px;
    height: 100%;
    // background-color: aqua;
  }
  .op{
    width: 480px;
    height: 100%;
    // background-color: aqua;
    .ce{
      width: 100px;
      height: 50px;
    }
  }
}
</style>