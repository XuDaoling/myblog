<template>
  <div class="first">
    <div class="p"><p>历史记录</p></div>
  </div>
  <div class="second">
    <ArticleHistory/>
  </div>
  <div class="third">
    <div class="bottom">
      <div class="lf">
        <el-icon><DArrowLeft /></el-icon>
      </div>
      <div class="page">
        <div>{{ pageNum }}</div>
      </div>
      <div class="rt">
        <el-icon><DArrowRight /></el-icon>
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';
import ArticleHistory from '@/components/ArticleHistory.vue';
const pageNum = ref(1)

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