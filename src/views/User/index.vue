<template>
  <div class="front">
    <video class="video-background" autoplay muted loop>
    <source src="../../assets/videos/你的每一次坚持，只为绝境翻盘那一刻.mp4" type="video/mp4">
  </video>
  </div>
  <div class="outer">
    <div class="card" v-show="!isResized" :class="{cardFlipped:isFlipped}">
      <div class="front con">
        <Login :change="change"/>
        <button @click="flipCard" class="regist">注册</button>
      </div>
      <div class="back con">
        <Regist :flipCard="flipCard"/>
        <button @click="flipCard" class="login">登录</button>
      </div>
    </div>
    <div v-show="isResized" class="resize card">
      <Resize :change="change"/>
    </div>
  </div>
</template>

<script setup>
import Imgaes from '../Home/images/Imgaes.vue';
import Login from './Login/Login.vue';
import Regist from './Regist/Regist.vue';
import Resize from './Resize/Resize.vue';


import { ref } from 'vue';
const isFlipped =ref(false);
function flipCard() {
      isFlipped.value = !isFlipped.value;
    }

const isResized = ref(false);

const change = () => {
  isResized.value = !isResized.value;
  console.log(isResized.value)
}
</script>

<style lang="scss" scoped>

.video-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover; /* 保持视频的宽高比并覆盖整个背景 */
      z-index: -1; /* 确保视频位于内容的后面 */
    }

    .content {
      position: relative;
      z-index: 1;
      color: white;
      text-align: center;
      font-size: 2rem;
      padding-top: 20%;
    }

.front{
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  top: 0;
  left: 0;
  overflow: hidden;
  opacity: 1.5;
}

.outer {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  // background: radial-gradient(circle, rgba(255, 105, 180, 0.8), rgba(138, 43, 226, 0.8));
}

.card {
  width: 500px;
  height: 400px;
  background: rgba(255, 255, 255, 0.4); /* 半透明背景 */
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* 阴影效果 */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform-style: preserve-3d;
  transition: all 1s;

  .con {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: 20px;
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
  }

  .back {
    transform: rotateY(180deg);
  }
}
.resize{
  width: 500px;
    height: 400px;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: 20px;
}

.cardFlipped {
  transform: rotateY(180deg);
}
</style>
