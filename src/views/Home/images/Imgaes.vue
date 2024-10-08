<template>
  <div class="imgs">
    <ul>
      <li class="item" v-for="carousel of carouselList" :key="carousel.id" :style="{
        'background-image': 'url(' + carousel.imgUrl + ')'
      }">
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {onMounted,reactive,ref} from 'vue'


class Carousel{
  id: number;
  imgUrl: string;
  constructor(id: number, imgUrl: string) {
    this.id = id;
    this.imgUrl = imgUrl;
  }
}

import img1 from '@/assets/imgs/1.png'
import img2 from '@/assets/imgs/2.png'
import img3 from '@/assets/imgs/3.png'
import img4 from '@/assets/imgs/4.png'
import img5 from '@/assets/imgs/5.png'
import img6 from '@/assets/imgs/6.png'


const carouselList = ref([
  new Carousel(1,img1),
  new Carousel(2,img2),
  new Carousel(3,img3),
  new Carousel(4,img4),
  new Carousel(5,img5),
  new Carousel(6,img6),
]);

</script>

<style lang="scss" scoped>

.imgs {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -9;
  background-color: #363636;
  overflow: hidden;

  .item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: no-repeat 50% 50% / cover;
    opacity: 0;
    animation: imageAnimation 36s linear infinite 0s;
    backface-visibility: hidden;
    transform-style: preserve-3d;

    &:nth-child(2) {
      animation-delay: 6s;
    }

    &:nth-child(3) {
      animation-delay: 12s;
    }

    &:nth-child(4) {
      animation-delay: 18s;
    }

    &:nth-child(5) {
      animation-delay: 24s;
    }

    &:nth-child(6) {
      animation-delay: 30s;
    }
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
    transition: all .2s ease-in-out 0s;
  }
}

@keyframes imageAnimation {
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 1;
    transform: scale(1.05);
    animation-timing-function: ease-out;
  }

  17% {
    opacity: 1;
    transform: scale(1.1);
  }

  25% {
    opacity: 0;
    transform: scale(1.1);
  }

  100% {
    opacity: 0;
  }
}
</style>
