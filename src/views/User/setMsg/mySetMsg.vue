<template>
    <div class="fa">
      <div class="set">
        <div class="p"><div><p>个人中心</p></div></div>
        <div class="select">
          <router-link active-class="active" to="/mine/myArticle" class="articles box"><div>{{ select[0] }}</div></router-link>
          <router-link active-class="active" to="/mine/myTag" class="tags box"><div>{{ select[1] }}</div></router-link>
          <router-link active-class="active" to="/mine/myStar" class="star box"><div>{{ select[2] }}</div></router-link>
          <router-link active-class="active" to="/mine/myFans" class="fans box"><div>{{ select[3] }}</div></router-link>
          <router-link active-class="active" to="/mine/myCollect" class="collect box"><div>{{ select[4] }}</div></router-link>
          <router-link active-class="active" to="/mine/myHistory" class="histort box"><div>{{ select[5] }}</div></router-link>
        </div>
      </div>
      <div class="show">
        <router-view></router-view>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const select = ['文章管理','标签管理','关注列表','粉丝列表','收藏列表','历史记录']

</script>

<style lang="scss" scoped>
.active{
    color: white;
    text-decoration-line: underline;
    background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* 阴影效果 */
    
}
    a{
      color: black;
        text-decoration-line: none;
    }
    a:hover{
        color: white;
        text-decoration-line: underline;
    }
.fa{
  height: 60%;
  display: grid;
  grid-template-columns: 1fr 3fr;
}
.p{
  margin: 10px 0 10px 0;
  height: 100px;
  width: 160px;
  text-align: center;
  line-height: 100px;
  font-size: 28px;
  background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); /* 阴影效果 */
}

.set{
      height: 100%;
      // background-color: peru;
      .select{
        width: 220px;
        height: 780px;
        // background-color: aqua;
        display: flex;
        flex-direction: column;
        .box{
            width: 100%;
            height: 100px;
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            // background-color: palevioletred;
            cursor: pointer;
        }

      }
    }
.show{
  height: 100%;
  border: 1px black solid;
}
</style>