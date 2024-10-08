import { KeepAlive } from 'vue'
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/Home/index.vue'),
      meta: {
        title: '首页',
        KeepAlive:true,
        saveScrollPosition: true,
      },
    },
    {
      name:'tag',
      path:'/tag',
      component: () => import('@/views/Tag/index.vue'),
      props: true,
      meta: {
        title: '标签',
      }
    },
    {
      name:'tagDetail',
      path:'/tag/:tagId/:tagName',
      component:() => import('@/views/Tag/TagDetail.vue'),
    },
    {
      name:'details',
      path:'/article/:id',
      component: () => import('@/views/Detail/Detail.vue'),
      props: true,
      meta: {
        title: '详情'
      },
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('@/views/About/index.vue'),
      meta: {
        title: '关于'
      },
    },
    {
      name: 'user',
      path: '/user',
      component: () => import('@/views/User/index.vue'),
      meta: {
        title: '用户'
      },
    },
    {
      name :'changeArticle',
      path: '/changeArticle/:id',
      component: () => import('@/views/Article/changeArticle.vue'),
      props: true,
      meta: {
        title: '修改文章',
        KeepAlive:true,
      }
    },
    {
      name :'addArticle',
      path: '/addArticle',
      component: () => import('@/views/Article/addArticle.vue'),
      props: true,
      meta: {
        title: '新增文章',
        KeepAlive:true,
      }
    },
    {
      name: 'mine',
      path: '/mine',
      component: () => import('@/views/User/mine.vue'),
      meta: {
        title: '个人中心'
      },
      children:[
        {
          name: 'myArticle',
          path: 'myArticle',
          component: () => import('@/views/User/setMsg/setArticles.vue'),
          meta: {
            title: '文章管理',
            KeepAlive:true,
          }
        },
        {
          name: 'myTag',
          path:'myTag',
          component: () => import('@/views/User/setMsg/setTags.vue'),
          meta: {
            title: '标签管理',
            KeepAlive:true,
          }
        },
        {
          name: 'myStar',
          path:'myStar',
          component: () => import('@/views/User/setMsg/setStar.vue'),
          meta: {
            title: '关注管理',
            KeepAlive:true,
          }
        },
        {
          name:'myFans',
          path:'myFans',
          component: () => import('@/views/User/setMsg/setFans.vue'),
          meta: {
            title: '设置',
            KeepAlive:true,
          }
        },
        {
          name:'myCollect',
          path:'myCollect',
          component: () => import('@/views/User/setMsg/setCollect.vue'),
          meta: {
            title: '收藏管理',
            KeepAlive:true,
          }
        },
        {
          name:'myHistory',
          path:'myHistory',
          component: () => import('@/views/User/setMsg/setHistory.vue'),
          meta: {
            title: '历史记录',
            KeepAlive:true,
          }
        },
        {
          name:'myName',
          path:'myName',
          component: () => import('@/views/User/setMsg/setName.vue'),
          meta: {
            title: '修改信息',
            KeepAlive:true,
          }
        }
      ]
    }
  ],

})

export default router
