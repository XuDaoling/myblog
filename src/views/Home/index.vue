<template>
  <div class="front">
    <Imgaes />
    <Sentents />
  </div>
  <div class="photo">
    <Wave />
    <ToDown />
  </div>
  <div class="fa">
    <div class="search">
      <div class="flex gap-4 mb-4 items-center">
        <el-input
          v-model="input1"
          style="width: 460px; height:60px"
          size="large"
          placeholder="Please Input"
          :prefix-icon="Search"
        />
      </div>
      <el-button @click="search" style="height: 60px;">搜索</el-button>
    </div>
    <div class="content">
      <Articles v-if="articleList.length > 0" :disableLT="disableLt" :disableRt="disableRt" :pageNum="pageNum" :articleList="articleList" :addPageNum="addPageNum"  :stPageNum="stPageNum"/>
      <div class="right" v-else>
        <!-- 可在这里添加加载状态或提示 -->
        <p>正在加载文章...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,computed } from 'vue';
import Articles from '@/components/Articles.vue';
import Wave from './Wave/Wave.vue';
import ToDown from './Wave/ToDown.vue';
import Imgaes from './images/Imgaes.vue';
import Sentents from './Brand/Sentents.vue';
import { getHomeArticleList } from '@/api/articles';
import { Search } from '@element-plus/icons-vue'
import { searchArticle } from '@/api/articles';

const articleList = ref([]); // 初始化为空数组
const total = ref()
const pageNum = ref(1)
const maxpage = ref()
// 获取文章列表
const get = () => {
  getHomeArticleList(pageNum.value).then(res => {
    articleList.value = res.data.data.list || []; // 确保在没有数据时是空数组
    total.value = res.data.data.all;
    maxpage.value = Math.ceil(total.value/5) // 确保在没有数据时是 0
    console.log(maxpage.value);
  }).catch(error => {
    console.error('获取文章列表失败:', error);
  });

}

get()

const input1 = ref('')

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

const search = () => {
  pageNum.value = 1; // 重置 pageNum 到 1，保证搜索结果始终在第一页
  if (input1.value === '') {
    alert('请输入关键词')
    return;
  }
  console.log({
    keyword: input1.value,
    pageNum: pageNum.value
  });
  searchArticle({
    keyword: '爱情',
    pageNum: 1
  }).then(res => {
    articleList.value = res.data.data.list || []; // 确保在没有数据时是空数组
    console.log(res.data.data);
    console.log(articleList.value);
  }).catch(error => {
    console.error('搜索文章失败:', error);
  });
}
</script>

<style lang="scss" scoped>
.front {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  top: 0;
  left: 0;
  overflow: hidden;
}
.photo {
  position: relative;
  height: 100vh;
  user-select: none;
}
.fa {
  user-select: none;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 42px;
  // background-color: aqua;
  .search{
    width: 840px;
    height: 100px;
    background-color: black;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    width: 1150px;
    display: grid;
  }
}
</style>
