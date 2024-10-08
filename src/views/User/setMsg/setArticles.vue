<template>
  <div class="first">
    <div class="p"><p>文章列表</p></div>
  </div>
  <div class="second">
    <ArticleList :pageNum="pageNum"/>
  </div>
  <div class="third">
    <div class="bottom">
      <div class="lf">
        <el-button :diaable="disableLt" @click="stPageNum"><el-icon ><DArrowLeft /></el-icon></el-button>
      </div>
      <div class="page">
        <div>{{ pageNum }}</div>
      </div>
      <div class="rt">
        <el-button :diaable="disableRt" @click="addPageNum"><el-icon ><DArrowRight /></el-icon></el-button>
      </div>
    </div>

    <el-button @click="addArticle()"  class="bop" type="primary">新增文章</el-button>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import ArticleList from '@/components/ArticleList.vue';
import { useRouter } from 'vue-router';
const router = useRouter()
import { getMyArticlesList } from '@/api/articles';


const addArticle = () => {
  router.push({
    name:'addArticle'
  })
}

const total = ref()
const pageNum = ref(1)
const maxpage = ref()
// 获取文章列表
const get = () => {
  getMyArticlesList(pageNum.value).then(res => {
    total.value = res.data.data.all;
    maxpage.value = Math.ceil(total.value/5)
    console.log(maxpage.value);
  }).catch(error => {
    console.error('获取文章列表失败:', error);
  });

}

get()


const disableLt = ref('false')
const disableRt = ref()



const addPageNum = () => {
  if (pageNum.value < maxpage.value) {
    pageNum.value++;
    disableRt.value = pageNum.value === maxpage.value;
    disableLt.value = pageNum.value > 1; // 当pageNum大于1时，左侧按钮启用
    get()
  }
}

const stPageNum = () => {
  if (pageNum.value > 1) {
    pageNum.value--;
    disableLt.value = pageNum.value === 1;
    disableRt.value = pageNum.value < maxpage.value; // 当pageNum小于maxpage时，右侧按钮启用
    get()
  }
}

const updateButtonStates = () => {
  disableLt.value = pageNum.value === 1;
  disableRt.value = pageNum.value === maxpage.value;
}

updateButtonStates()

</script>

<style lang="scss" scoped>
.first{
  width: 100%;
  height: 100px;
  display: flex;
  // background-color: white;
  .p{
  margin: 10px 0 10px 0;
  height: 80px;
  width: 160px;
  text-align: center;
  line-height: 80px;
  font-size: 22px;
  background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* 阴影效果 */
}
}
.second{
  width: 100%;
  height: 650px;
  // background-color: yellow;
}
.third{
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  // background-color: aqua;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.2);
  .bottom{
  height: 40px;
  width: 200px;
  margin: 20px 0 20px 0;
  background-color: pink;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.1);
  .lf,.rt{
    width: 30px;
    height: 30px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }
}
}
</style>