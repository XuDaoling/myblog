<template>
      <div class="baseMsg">
        <div class="pto"><img :src="userBase.avatarUrl" alt=""></div>
        <div class="data">
          <div class="nickname bx"><div><p>用户名:{{ userBase.nickname }}</p></div></div>
          <div class="photoNum bx"><div><p>手机号:{{ userBase.phoneNumber }}</p></div></div>
          <div class="nickname bx"><div><p></p>性别:男</div></div>
          <div class="neum">
            <div class="box"><div><p>关注:{{ userBase.followingCount }}</p></div></div>
            <div class="box"><div><p>粉丝:{{ -userBase.followerCount }}</p></div></div>
            <div class="box"><div><p>收藏:{{ userBase.collectionCount }}</p></div></div>
          </div>
        </div>
        <el-button class="change" type="success">编辑</el-button>
      </div>
</template>

<script setup>
import img from '@/assets/imgs/2.png'
import { ref,onMounted } from 'vue';
import { getUserBase } from '@/api/user';

const userBase = ref({})

onMounted(()=>{
  getUserBase().then(res => {
    userBase.value = res.data.data
    console.log(userBase.value)
  })
})

</script>

<style lang="scss" scoped>
.baseMsg{
      width: 100%;
      height: 300px;
      display: flex;
      background-color: palevioletred;
      background: rgba(255,255, 255, 0.1); /* 半透明背景 */
      border-radius: 15px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* 阴影效果 */
      position: relative;
      .change{
        height: 50px;
        width: 100px;
        position: absolute;
        top: 125px;
        right: 10%;
      }
      .pto{
        margin-top: 50px;
        margin-left: 50px;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        // background-color: aqua;
        img{
          height: 500px;
        }
      }
      .data{
        background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* 阴影效果 */
        margin: 50px 0 0 20px;
        width: 400px;
        height: 200px;
        display: flex;
        flex-direction: column;
        .bx{
          // background-color: rgba(221, 160, 221,0.7);
          height: 100px;
          margin-left: 20px;
          display: flex;
          align-items: center;
          font-size: 15px;
          font-weight: bolder;
        }
        .neum{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        width: 100%;
        height: 100px;
        // background-color: purple;
        // justify-content: center;
        .box{
          // background-color: rgba(221, 160, 221,0.7);
          height: 30px;
          width: 120px;
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          margin: 0 30px 0 0;
        }
      }
      }
    }
</style>