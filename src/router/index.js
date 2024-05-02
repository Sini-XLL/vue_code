import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Client/HomeView/index.vue'
import Layout from '../views/Client/Layout/index.vue'
import MoviwView from '../views/Client/MovieView/index.vue'
import AdminLayout from '../views/Admin/Layout/index.vue'
import Login from '../views/Login/index.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect:"/movieInfo",
    hidden:true,//如果隐藏为true则不显示
    component: Layout,
     meta:{
          name:'首页'
        },
    children: [
      {
        path: '/home',
        name: 'home',
        component: HomeView,
         meta:{
          name:'首页'
        },
      },
       {
        path: '/movieInfo',
        name: 'movieInfo',
        component: MoviwView,
         meta:{
          name:'电影详情'
        },
      }
    ]
  },

  {
    path: '/admin',
    name: 'admin',
    component:AdminLayout,
     meta:{
          name:'影片管理'
        },
        children:[//第二层路由 
      {
        path: '/moviemanage', //默认显示子路由组件
        name: 'AdminInfo',
        component:() => import('../views/Admin/MovieManage/index.vue'),
        meta:{
          name:'影片列表'
        },

      },
       {
        path: '/moviemanage', //默认显示子路由组件
        name: 'AdminInfo',
        component:() => import('../views/Admin/MovieManage/index.vue'),
        meta:{
          name:'影片列表'
        },

      },
    ]
  },
   {
    path: '/admin',
    name: 'admin',
    component:AdminLayout,
     meta:{
          name:'用户管理'
        },
        children:[//第二层路由 
      {
        path: '/moviemanage', //默认显示子路由组件
        name: 'AdminInfo',
        component:() => import('../views/Admin/MovieManage/index.vue'),
        meta:{
          name:'用户列表'
        },

      },
       {
        path: '/moviemanage', //默认显示子路由组件
        name: 'AdminInfo',
        component:() => import('../views/Admin/MovieManage/index.vue'),
        meta:{
          name:'影片列表'
        },

      },
    ]
  },
  {

        path: '/login', //默认显示子路由组件
        name: 'Login',
        hidden:"true",
        component:Login,
        meta:{
          name:'登录页'
        },


  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
