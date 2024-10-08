<template>
  <div class="first">
    <div class="p"><p>粉丝列表</p></div>
  </div>
  <div class="second">
    <div v-if="fanList.length > 0" class="bx" v-for="item in fanList">
      <div class="hdp"><img :src="item.avatarUrl" alt=""></div>
      <div class="data">{{ item.nickname }}</div>
    </div>
    <div class="right" v-else>
        <!-- 可在这里添加加载状态或提示 -->
      <p>{{ msg }}</p>
    </div>
  </div>

</template>

<script setup>
import { ref,onMounted } from 'vue';
import { getUserFans } from '@/api/user';
const fanList = ref([])

const msg = ref('加载中，请稍等')

onMounted(()=>{
  getUserFans().then(res => {
    fanList.value = res.data.data;
    if(fanList.value.length === 0){
      msg.value = '暂无粉丝'
    } // 确保在
    console.log(fanList.value)
  }).catch(error => {
  console.error('获取粉丝列表失败:', error);
  });
})

</script>

<style lang="scss" scoped>

.hdp{
          margin-right: 10px;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          // background-color: aqua;
          img{
            height: 100px;
          }
        }


.first{
  width: 100%;
  height: 100px;
  display: flex;
  // background-color: white;
  .p{
  margin: 10px 0 10px 0;
  height: 80px;
  width: 160px;
  text-align: center;
  line-height: 80px;
  font-size: 22px;
  background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* 阴影效果 */
}
}
.second{
  width: 100%;
  height: 650px;
  // border: 1px solid pink;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(7,1fr);
  gap: 5px;
  .right{
    width: 900px;
    height: 200px;
    background: rgba(255, 255, 255, 0.4); /* 半透明背景 */
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* 阴影效果 */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 40%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    background: rgba(255, 255, 255, 0.1);
  }
  .bx{
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    background: rgba(255, 255, 255, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }

}
.third{
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  justify-content: center;
  // background-color: aqua;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.2);
  .botton{
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
  // background-color: yellow;
}
}
</style>