<template>
  <div class="app">
    <Header></Header>
    <div class="content">
      <router-view v-slot="{ Component, route }">
        <!-- 只缓存 'home' 路由页面 -->
        <keep-alive>
          <component :is="Component" :key="$route.fullPath" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

</script>

<style lang="scss" scoped>
.app {
  scrollbar-width: thin; /* 滚动条宽度: 'auto', 'thin', 'none' */
  scrollbar-color: #888 #f1f1f1; /* 滚动条颜色和轨道颜色 */
}
</style>
