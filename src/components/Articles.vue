<template>
  <div class="left">
    <div class="every" v-for="item in articleList" :key="item.id">
      <div class="data">
        <div class="time box">
          <div class="hdp"><img :src="item.userImg" alt=""></div>
          <div class="author">{{ item.author }}</div>
        </div>
        <div class="title box" @click="readMore(item)">
          <div class="p">{{ item.title }}</div>
        </div>
        <div class="sage box">
          <div>{{ repalceHtmlToText(item.content) }}</div>
        </div>
        <div class="tags box">
          <div @click="toTag(it.id)" class="eve" v-for="it in item.tags">{{ it.tagName }}</div>
        </div>
      </div>
    </div>
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
  </div>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';


const props = defineProps({
  articleList: {
    type: Array,
    required: true
  },
  pageNum:{
    type: Number,
    required: true
  },
  disableLt:{
    type: Boolean,
  },
  disableRt:{
    type: Boolean,
  },
  stPageNum: {
    type:Function
  },
  addPageNum: {
    type: Function
  }
});

console.log(props.articleList,'11111111111111111111111')

onMounted(() => {
  if (!props.articleList || props.articleList.length === 0) {
    console.warn("articleList is empty or not passed.");
  } else {
    console.log(props.articleList);
  }
});

const router = useRouter();

function repalceHtmlToText(str) {
    if (!str) return ''; // 检查 str 是否为 undefined 或空
    str = str.replace(/<\/?.+?>/g, "");
    str = str.replace(/&nbsp;/g, "");
    return str.substring(0, 300) + '...';
}

function toTag(tag){
  router.push({
    path: `/tag/${tag}`
  })
}



function readMore(articles) {
  if (!articles.id) {
    console.warn("Article ID is missing");
    return;
  }
  router.push({
    name: 'details',
    params: {
      id: articles.id,
    },
  });
}
</script>

<style lang="scss" scoped>
.left {
  // min-height: 1360px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: #D85E6D;
  .every {
    
    background: rgba(255, 255, 255, 0.1);
    width: 840px;
    height: 360px;
    background-color: pink;
    margin: 10px 0;
    border-radius: 20px;
    display: grid;
    column-gap: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    border: 1px solid black;
    .data {
      height: 360px;
      overflow: hidden;
      border-radius: 0 20px 20px 0;
      .box{
        margin: 0 20px 0 20px;
      }
      .time {
        height: 80px;
        display: flex;
        justify-content: start;
        align-items: center;
        margin-top: 15px;
        margin-bottom: 5px;
        font-size: 15px;
        // background-color: aqua;
        // margin: 0 20px;
        .hdp{
          margin-top: 0px;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          // background-color: aqua;
          img{
            height: 100px;
          }
          // background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
          // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
        }
        .author{
            height: 60%;
            width: 100px;
            // background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            margin-left: 20px;
            background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* 阴影效果 */
        }
      }
      .title {
        height: 70px;
        display: flex;
        align-items: start;
        // justify-content: center;
        font-size: 36px;
        font-weight: bold;
        color: #D85E6D;
        cursor: pointer;
        // background-color: aqua; /* 阴影效果 */
        .p{
          background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
        }
      }
      .sage {
        margin-top: 15px;
        // height: 90px;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        // background-color: aqua;
        background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
      }
      .tags {
        margin-top: 20px;
        height: 30px;
        cursor: pointer;
        // background-color: aqua;
        display: flex;
        align-items: center;
        .eve{
          margin-right: 10px;
          width: 50px;
          height: 30px;
          background-color: bisque;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(255, 255, 255, 0.4); /* 半透明背景 */
          border-radius:4px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 阴影效果 */

        }
      }
    }
  }
}
.bottom{
  height: 40px;
  width: 200px;
  background-color: pink;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  .lf,.rt{
    width: 30px;
    height: 30px;
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }
}
</style>
