<template>
  <div class="title"><p>请注册你的账号</p> </div>
  <div class="in">
    <div class="box">
      <div class="p"><p>账号:</p></div>
      <input class="nickname" type="text" v-model="nickname" maxlength="10">
    </div>
    <div class="box">
      <div class="p"><p>密码:</p></div>
      <input class="password" type="password" v-model="password" maxlength="20">
    </div>
    <div class="box">
      <div class="p"><p>手机号:</p></div>
      <input class="phoneNumber" type="text" v-model="phoneNumber" maxlength="11">
    </div>
    <div class="box">
      <div class="p"><p>验证码:</p></div>
      <input class="verCode" type="text" v-model="verCode" maxlength="6" style="width: 170px;">
      <button class="getId" @click="getCodee">{{ message }}</button>
    </div>
  </div>
  <el-button class="regist" @click="userRegistt">注册</el-button>
</template>

<script setup>
import {ref} from 'vue'
import { getCode,userRegist } from '@/api/user';

const props = defineProps({
  flipCard:{
    type: Function,
    default: false,
  }
})

const nickname= ref('')
const password = ref('')
const phoneNumber = ref('')
const verCode = ref('')
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

const userRegistt = () => {
  if(nickname.value === '' || password.value === '' || phoneNumber.value === '' || verCode.value === '') {
    alert('请填写完整信息')
    return;
  }
  userRegist({
    nickname: nickname.value,
    password: password.value,
    phoneNumber: phoneNumber.value,
    code: verCode.value
  }).then(res => {
    console.log(res.data)
    if(res.data.code == 1) {
      alert('注册成功')
      props.flipCard() // 关闭注册窗口并跳转到登录窗口
    }
    else {
      alert('注册失败')
    }
    nickname.value = ''
    password.value = ''
    phoneNumber.value = ''
    verCode.value = ''
  })
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
      width: 200px;
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
