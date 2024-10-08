<template>
    <div class="title"><p>请登录你的账号</p> </div>
    <div class="in">
      <div class="box">
        <div class="p"><p>账号:</p></div>
        <input class="nickname" type="text" v-model="nickname">
      </div>
      <div class="box">
        <div class="p"><p>密码:</p></div>
        <input class="password" type="password" v-model="password">
      </div>
    </div>
    <div>
      <el-button class="login" @click="change"><p>忘记密码</p></el-button>
      <el-button class="login" @click="login"><p>登录</p></el-button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios';
const router = useRouter()
const nickname =ref('')
const password =ref('')
import { userLogin } from '@/api/user';


import { useUserStore } from '@/stores'
const userStore = useUserStore()

const props = defineProps({
  change:{
    type: Function,
    required: true
  }
})

function login () {
  if(nickname.value == '' || password.value == ''){
    alert('账号或密码不能为空');
    return;
  }
  userLogin({
    nickname: nickname.value,
    password: password.value
  }).then(res => {
    if(res.data.code === 1) {
      userStore.changeLogin()
      userStore.setToken(res.data.msg)
      nickname.value = ''
      password.value = ''
      alert('登录成功！');
      router.push({
        name: 'home'
      });
    }
    else {
      nickname.value = ''
      password.value = ''
      alert('登录失败！');
    }
    console.log(res.data)
  }).catch(err => {
    console.error('登录错误:', err);
  });
}

</script>

<style lang="scss" scoped>
.regist{
      margin-top: 10px;
      width: 200px;
      height: 40px;
      border-radius: 50px;
      border: none;
    }
    .login{
      margin-top: 10px;
      width: 100px;
      height: 40px;
      border-radius: 50px;
      border: none;
    }

  .title{
      margin: 80px 0 40px 0;
    }
    img{
      width: 300px;
    }
    .in{
      width: 340px;
      height: 100px;
      display: grid;
      margin-bottom: 20px;
      // background-color: palevioletred;
      grid-template-rows: 1fr 1ft;
      row-gap: 10px;
      .box{
        display: flex;
        justify-content: center;
        align-items: center;
        // border: 1px solid black;
        // background-color: aqua;
        .p{
          width: 70px;
          height: 100%;
          border-radius: 20px 0 0 20px;
          background-color: palevioletred;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      input{
      width: 250px;
      height: 100%;
      border-radius: 0 30px 30px 0;
      border: none;
      font-size: 20px;
      padding-left: 20px;
    }
    }

</style>
