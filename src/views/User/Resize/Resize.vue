<template>
  <div class="title"><p>重置密码</p> </div>
  <div class="in">
    <div class="box">
      <div class="p"><p>手机号:</p></div>
      <input class="phoneNum" type="text" v-model="phoneNumber" maxlength="11">
    </div>
    <div class="box">
      <div class="p"><p>验证码:</p></div>
      <input class="verCode" type="text" v-model="verCode" maxlength="6" style="width: 170px;">
      <button class="getId" @click="getCodee">{{ message }}</button>
    </div>
    <div class="box">
      <div class="p"><p>密码:</p></div>
      <input class="password" type="password" v-model="password" maxlength="20">
    </div>
    <div class="nume box">
      <el-button class="regist" @click="change">登录</el-button>
      <el-button class="regist" @click="reset">重置</el-button>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'

import { resetPasssword,getCode } from '@/api/user';

const props = defineProps({
  change:{
    type:Function,
    Required:true
  }
})

const password = ref()
const phoneNumber = ref()
const verCode = ref()
const message = ref('点击')

const getCodee = () => {
  getCode(phoneNumber.value).then(res => {
    console.log(res.data)
    alert(res.data.msg)
    if(res.data.code == 1) {
      message.value = '已发送'
    }
  })
}
const reset = () => {
  console.log(phoneNumber.value,password.value)
  if(phoneNumber.value == undefined || password.value == undefined) {
    alert('请填写完整信息')
  } else {
    resetPasssword({
    phoneNumber: phoneNumber.value,
    password: password.value,
    code: verCode.value
  }).then(res => {
    console.log(res)
  })
  }
}

</script>

<style lang="scss" scoped>
.getId{
  width: 70px;
  margin-left: 10px;
  height: 100%;
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* 阴影效果 */
border-radius: 30px;
}
.regist{
      margin-top: 10px;
      width: 100px;
      height: 40px;
      border-radius: 50px;
      border: none;
    }
    .login{
      margin-top: 10px;
      width: 200px;
      height: 40px;
      border-radius: 50px;
      border: none;
    }
.title{
    margin: 30px 0 20px 0;
    font-size: 24px;
  }
  .in{
    width: 350px;
    height: 200px;
    display: grid;
    // margin-bottom: 10px;
    // background-color: palevioletred;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    row-gap: 10px;
    .box{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      // border: 1px solid black;
      // background-color: aqua;
      .p{
        width: 100px;
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
