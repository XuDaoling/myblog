<template>
  <!-- <img class="page-cover" src='../../assets/images/星空.jpg' alt="" height="100%"> -->
  <Front :obj="{
    title:'标签',
    content:'',
    url:bgImg

  }" />
  <div class="page-header">
    <Wave></Wave>
  </div>
  <div class="bg">
      <div class="tag-cloud">
        <router-link :to="`/tag/${tag.id}/${tag.tagName}`" class="tag-item" v-for="tag in tagList" :key="tag.id"
          :style="{ 'font-size': getSize(tag.count), 'color': getRandomColor() }">
          {{ tag.tagName }}
          <sup>{{ tag.count }}</sup>
        </router-link>
      </div>
  </div>
</template>

<script setup>
import Wave from '@/views/Home/Wave/Wave.vue'
import { ref, reactive, toRefs, onMounted } from "vue";
import { getTags } from '@/api/articles';
import Front from '@/components/Front.vue';
import axios from 'axios';
import bgImg from '@/assets/imgs/6.png'


const getSize = (freq) => {
  return ((2 + 6 * freq / 15) / 3) * 3 + "rem";
};


const getRandomColor = () => {
  return "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
};

const tagList = ref([]);

onMounted(()=>{
  getTags().then(res=>{
    tagList.value = res.data.data
    console.log(res.data.data)
  })
})

const data = reactive({
  siteConfig: {
    tagBackgroundImage: "",
  },
});


</script>

<style lang="scss" scoped>
.page-header{
  // height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 25px;
  position: relative;
}
.bg{
  width: 100%;
  min-height: 30vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
}

.page-cover{
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -55;
  top: 0;
  left: 0;
  overflow: hidden;
}

.tag-cloud {
  font-size: 10px;
  text-align: center;
  width: 1000px;
}

.tag-item {
  display: inline-block;
  padding: 0 0.5rem;
  transition: all 0.3s;
  max-block-size: 100px;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
