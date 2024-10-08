<template>
  <div class="outer">
    <div class="user">
      <BaseMsg/>
      <mySetMsg/>
    </div>
  </div>
</template>

<script setup>
import {ref,} from 'vue'
import BaseMsg from './BaseMsg/BaseMsg.vue';
import mySetMsg from './setMsg/mySetMsg.vue';
import img1 from '@/assets/imgs/1.png'

</script>

<style lang="scss" scoped>
.outer{
  background: url('@/assets/imgs/6.png')
  no-repeat center center fixed;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .user{
    width: 1800px;
    height: 1200px;
    background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* 阴影效果 */
    // background-color: pink;
    border-radius: 30px;

    overflow: hidden;
  }
}
</style>