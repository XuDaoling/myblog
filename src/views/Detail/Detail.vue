<template>
    <Front :obj="article" />
    <div class="blog">
      <div class="content" v-if="article.content">
        <div class="basic">
          <div class="hdp"><img :src="avatarUrl" alt=""></div>
          <div class="neum">
            <div class="star bbx" v-if="!isStarted">
              <div class="p">关注</div>
              <el-icon size="50" @click="star"><CirclePlus /></el-icon>
            </div>
            <div class="unstar bbx" v-else>
              <div class="p">已关注</div>
              <el-icon size="50" @click="unstar"><SuccessFilled /></el-icon>
            </div>
            <div class="collect bbx" v-if="!isCollected" >
              <div class="p">收藏</div>
              <el-icon size="50" @click="collext"><Plus /></el-icon>
            </div>
            <div class="uncollect bbx" v-else >
              <div class="p">已收藏</div>
              <el-icon size="50" @click="uncollext"><StarFilled /></el-icon>
            </div>
          </div>
        </div>
        <div class="p" v-html="article.content"></div>
      </div>
      <div class="comment">
        <div class="addcomt">
          <div class="hdp"><img :src="avatarUrl" alt=""></div>
          <textarea class="enter" v-model="comment" placeholder="欢迎留言评论" cols="30" name="" id=""></textarea>
          <!-- <input class="enter" type="text" v-model="comment" placeholder="欢迎留言评论"> -->
          <el-button class="btu" type="primary" @click="addComment">评论</el-button>
        </div>
        <div class="show">
          <div class="eve" v-for="item in article.comments">
            <div class="hdp"><img :src="item.userImage" alt=""></div>
            <div class="data">
              <div class="name">{{ item.userNickname }}</div>
              <div class="p"><p>{{ item.comment }}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { reactive, onMounted,watch,ref } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import Front from '@/components/Front.vue';
import { getArticleDetail } from '@/api/articles';
import { putComment,getUserBase,starUser,unstarUser,uncollectArticle,collectArticle } from '@/api/user';
import { onBeforeRouteLeave } from 'vue-router';

const avatarUrl = ref('')

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});
console.log(props.id)

const article = ref({});

const isStarted = ref();
const isCollected = ref();

onMounted(()=>{
  getArticleDetail(props.id).then(res => {
    article.value = res.data.data // 更新属性而不是重新赋值
    console.log(article.value);
    isStarted.value =res.data.data.followed === 1?true:false;
    isCollected.value =res.data.data.collected === 1?true:false;
    console.log('1111111111111')
    console.log(isStarted.value === false);
    console.log('1111111111111')
  })
})

onMounted(()=>{
  getUserBase().then(res => {
    avatarUrl.value = res.data.data.avatarUrl
    console.log(avatarUrl.value) // 获取头像
  })
})


const star = () => {
  starUser(article.value.authorId).then(res => {
    if(res.data.code === 1) {
      isStarted.value = true;
      alert(res.data.msg)
    }
    console.log(res.data)
  })
}
const unstar = () => {
  unstarUser(article.value.author).then(res => {
    if(res.data.code === 1) {
      isStarted.value = false;
      alert(res.data.msg)
    }
    console.log(res.data)
  })
}

const collext = () => {
  isCollected.value = true;
  collectArticle(props.id).then(res => {
    if(res.data.code === 1) {
      alert(res.data.msg)
    }
    console.log(res.data)
  })
}

const uncollext = () => {
  uncollectArticle(props.id).then(res => {
    if(res.data.code === 1) {
      alert(res.data.msg)
    }
    console.log(res.data)
  })
  isCollected.value = false;
}



onMounted(() => {
  window.scrollTo(0, 0); // 页面加载时滚动到顶部
});


const comment = ref('')

const addComment = () => {
  if(comment.value === '') {
    alert('请先输入评论内容')
    return;
  }
  putComment({
    articleId: props.id,
    comment: comment.value
  }).then(res => {
    getArticleDetail(props.id).then(res => {
      article.value = res.data.data

  })
  })
}

</script>

<style lang="scss" scoped>

.hdp{
          margin-right: 10px;
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
        }
.blog {
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  .content{
    margin: 40px 0 40px 0;
    width: 1000px;
    border-radius: 40px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    .basic{
      width: 90%;
      height: 80px;
      // margin-bottom: 20px;
      // background-color: pink;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      .neum{
        display: flex;
        align-items: center;
        .bbx{
          width: 100px;
          // display: flex;
          text-align: center;
      }
      }
      
    }
    .p{
      width: 95%;
      // margin-bottom: 20px;
      color: black;
    }
  }
  .comment{
    margin-top: 40px;
    width: 1000px;
    border-radius: 40px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    .addcomt{
      min-height: 100px;
      width: 100%;
      margin: 20px 0 20px 0;
      // background-color: pink;
      border-radius: 10px;
      display: flex;
      align-items: center;
      .enter{
        width: 80%;
        height: 60px;
        padding-left: 20px;
        resize: none;
        padding-top: 10px;
        font-size: 16px;
        // border:  none;
      }
      .btu{
        width: 10%;
        height: 70px;
      }
    }
    .show{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .eve{
        display: flex;
        width: 100%;
        margin: 20px;
        // background-color: palevioletred;
        align-items: center;
        .data{
          width: 90%;
          height: 60px;
          // background-color: pink;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
      }
    }
  }
}
</style>
