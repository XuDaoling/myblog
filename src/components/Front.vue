<template>
    <div class="front" :style="backgroundStyle">
      <div class="con">
        <div class="title"><div>{{ obj.title }}</div></div>
        <div class="sag">
          <div class="autor bx">{{ obj.author?`作者：${obj.author}`:'' }}</div>
          <div class="time_view bx">{{ obj.views?`浏览量：${obj.views}`:'' }}</div>
          <div class="updata bx">{{ obj.updateTime?`发布时间：${obj.updateTime}`:'' }}</div>
        </div>
      </div>
    </div>
    <div style="height: 70vh;width: 100vw;"></div>
</template>

<script setup>
import {ref,computed} from 'vue'
const props = defineProps({
  obj: {
    type: Object,
    required: true
  }
})



console.log(props.obj)

import img1 from '@/assets/imgs/1.png'
import img2 from '@/assets/imgs/2.png'
import img3 from '@/assets/imgs/3.png'
import img4 from '@/assets/imgs/4.png'
import img5 from '@/assets/imgs/5.png'
import img6 from '@/assets/imgs/6.png'
import img7 from '@/assets/imgs/7.jpg'
import img8 from '@/assets/imgs/8.jpg'
import img9 from '@/assets/imgs/9.jpg'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const imgList = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const randomInt = getRandomInt(0, 8);


// const backgroundStyle = ref({
//   background:`url(${props.obj.url})`
// })
import img from '@/assets/imgs/6.png'

const backgroundStyle = computed(() => {
  return {
    backgroundImage: `url(${imgList[randomInt] || img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  };
});


</script>

<style lang="scss" scoped>
.front{
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .con{
    height: 38vh;
    // background-color: #fff;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
    .title{
      font-size: 48px;
      font-weight: bold;
      text-align: center;
    }
    .sag{
      width: 800px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .bx{
        font-size: 24px;
      }
    }
  }
}
</style>