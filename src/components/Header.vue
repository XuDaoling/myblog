<template>
  <div class="fa" ref="header">
    <div class="nav">
      <router-link class="icon" to="/">
        <img src="../assets/images/雪帝.png" alt="">
      </router-link>
      <router-link class="p" active-class="active" to="/">首页</router-link>
      <router-link class="p" active-class="active" to="/tag">标签</router-link>
      <router-link class="p" active-class="active" to="/about">关于</router-link>
      <router-link v-if="userStore.Logined" active-class="active" class="p" to="/mine" >我的</router-link>
      <router-link v-else class="p" active-class="active" to="/user" >登录</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useUserStore } from '@/stores';
const userStore = useUserStore()

const header = ref(null)

const lastScrollTop = ref(0) // 上一次滚动位置
const upDown = (event) => {
  const currentScrollTop = window.scrollY || document.documentElement.scrollTop
  if (currentScrollTop > lastScrollTop.value) {
    header.value.style.transform = 'translateY(-100%)' // 下滑
    console.log('下滑')
  } else {
    header.value.style.transform = 'translateY(0%)' // 上滑
    console.log('上滑')
  }
  lastScrollTop.value = currentScrollTop
}

// 在组件挂载时添加滚动事件监听
onMounted(() => {
  window.addEventListener('scroll', upDown)
})

// 在组件卸载时移除滚动事件监听
onUnmounted(() => {
  window.removeEventListener('scroll', upDown)
})
</script>

<style lang="scss" scoped>
.active{
    color: palevioletred;
    text-decoration-line: underline;
}
    a{
      color: black;
        text-decoration-line: none;
    }
    a:hover{
        color: palevioletred;
        text-decoration-line: underline;
    }


.fa {
  user-select: none;
  width: 100vw;
  height: 50px;
  background-color: aqua;
  display: flex;
  align-items: center;
  position: fixed;
  transition: all 0.2s;
  overflow: hidden;
  background-color: #fff;
  z-index:100;
  .nav {
    display: flex;
    margin-left: 20px;

    .icon{
      width: 70px;
      height: 30px;
      margin-right: 20px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }

    .p {
      width: 100px;
      cursor: pointer;
      font-size: 20px;
    }
  }
}
</style>
