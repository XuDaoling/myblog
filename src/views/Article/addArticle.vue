<template>
  <div class="outer">
    <div class="data">
      <div class="pp">
        <div>修改文章</div>
        <button @click="adddate" class="but">确认</button>

      </div>
      <div class="first">
        <div class="p">标题:</div>
        <input class="inp" v-model="title"></input>
      </div>
      <div class="tags">
        <div class="p">标签:</div>
        <div class="m-4">
          <el-select
            v-model="selectTag"
            multiple
            placeholder="Select"
            style="width: 240px"
            multiple-limit=3
          >
            <el-option
              v-for="item in tags"
              :key="item.id"
              :label="item.tagName"
              :value="item.id"
            />
          </el-select>
        </div>
        <div class="alt"><p>(每篇文章最多三个标签)</p></div>
      </div>
      <div class="con">
        <div class="p">内容:</div>
        <div class="td">
          <TEditor ref="Article" />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import TEditor from '@/components/TEditor.vue';
import { getTags, addArticle } from '@/api/articles';
import { useRouter } from 'vue-router';

const router = useRouter();


const selectTag = ref([])

const limitSelection = () => {
  if (selectTag.value.length > 3) {
    selectTag.value = selectTag.value.slice(0, 3);
    alert('最多只能选择三个选项');
  }
  console.log(selectTag.value)
};


const title = ref('')

const Article = ref(null);

const tags = ref([])



onMounted(()=>{
  getTags().then(res => {
    tags.value = res.data.data
    console.log(tags.value)
  })
})

const adddate = () =>{
  if(title.value=='' || Article.value.handleGetContent()=='' || selectTag.value.length === 0) {
    alert('请填写完整信息')
    return 0;
  }
  addArticle({
    title: title.value,
    content:Article.value.handleGetContent(),
    tagIds: selectTag.value
  }).then(res => {
    alert('新增成功')
    router.push({
      name:'myArticle'
    })
  }).catch(err => {
    console.log(err)
    alert('新增失败')
  })
}

</script>

<style lang="scss" scoped>
.outer{
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: aqua;
  
  .data{
    width: 1100px;
    height: 90vh;
    // background-color: white;
    .pp{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 30px;
      margin: 20px 0 0 20px;
      .but{
        background-color: green;
        color: white;
        height: 80px;
        width: 130px;
      }
    }
    .first{
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        margin-top: 20px;
        // background-color: white;
        .p{
          width: 80px;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .inp{
          width: 300px;
          height: 50px;
          border: 1px solid black;
          padding-left: 20px;
          font-size: 26px;
        }
      }
      .tags{
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        margin-top: 20px;
        // background-color: white;
        .alt{
          margin-left: 20px;
        }
        .p{
          width: 80px;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .inp{
          width: 300px;
          height: 100px;
          border: 1px solid black;
          padding-left: 20px;
          font-size: 26px;
        }
      }
      .con{
        width: 100%;
        min-height: 600px;
        margin: 50px 0 50px 0;
        // background-color: white;
        .p{
          width: 80px;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .td{
          border: 1px solid black;
          height: auto;
          // background-color: aqua;
        }
      }
      
  }
}
</style>