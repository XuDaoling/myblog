import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticleStore = defineStore('articles', () => {
  const articles = ref([])
  async function getArticles () {
    articles.value = (await axios.get('http://localhost:3000/admin/articles'))
  }
  function toArticle (obj) {
    articles.value = obj
  }
  return { articles,getArticles,toArticle }
},{
  persist: true,
})
