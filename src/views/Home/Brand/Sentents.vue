<template>
  <div class="brand">
    <div class="title">
      写给你的Web！
    </div>
    <div class="typewriter">
      {{ displayedText }}
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';

const fullText = '给过去一点时间，让过去过去，让开始开始'; // 要显示的完整文字
const displayedText = ref(''); // 当前显示的文字
const typingSpeed = 150; // 每个字符出现的间隔时间（毫秒）

onMounted(() => {
  let index = 0;
  const type = () => {
    if (index < fullText.length) {
      displayedText.value += fullText[index];
      index++;
      setTimeout(type, typingSpeed); // 递归调用继续显示下一个字符
    }
  };
  type(); // 启动打字机效果
});
</script>

<style lang="scss" scoped>



.brand{
  color: antiquewhite;
  z-index: 100;
  cursor: pointer;
  width: 100vw;
  height: 90vh;
  // background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .title{
    // background-color: pink;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    font-family:  '可爱体';
    // background-color: aqua;
  }
  .typewriter {
    // background-color: pink;
    font-family: monospace;
    font-size: 35px;
    white-space: pre;
    font-family:  '圆体';

}
}

/* .typewriter {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
   /* 等宽字体更有打字机效果 */
  /* color: white; */
  /* font-size: 35px; */
  /* white-space: pre; 保持空格和换行 */
/* }  */
</style>
