<template>
  <div class="outer">
    
    <div class="data">
      <div class="pp">
        <div>修改文章</div>
        <button @click="update" class="but">确认</button>

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
import { getArticleDetail,upArticle,getTags } from '@/api/articles';
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';

const router = useRouter();

const open1 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
    plain: true,
  })
}


const success = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}

onMounted(()=>{
  success()
})

const tag1 = ref()
const tag2 = ref()
const tag3 = ref()

const selectTag = ref([])

const limitSelection = () => {
  if (selectTag.value.length > 3) {
    selectTag.value = selectTag.value.slice(0, 3);
    alert('最多只能选择三个选项');
  }
  console.log(selectTag.value)
};

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const title = ref('')

const Article = ref(null);

const tags = ref([])


onMounted(()=>{
  getArticleDetail(props.id).then(res => {
    console.log(res.data.data,'222222222222222');
    title.value = res.data.data.title;
    Article.value.handleSetContent(res.data.data.content)
    // selectTag.value = res.data.data.tags
    res.data.data.tags.forEach(element => {
      selectTag.value.push(element.id)
    })
  })
})
onMounted(()=>{
  getTags().then(res => {
    tags.value = res.data.data
    console.log(tags.value)
  })
})

const update = () =>{
  upArticle({
    id: props.id,
    title: title.value,
    content:Article.value.handleGetContent(),
    tagIds: selectTag.value
  }).then(res => {
    alert('修改成功')
    router.push({
      name:'myArticle'
    })
  }).catch(err => {
    console.log(err)
    alert('修改失败')
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