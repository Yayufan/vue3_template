import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import News from "@/views/News.vue"
// import About from "@/views/About.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      children: [
        {
          name: 'detail',
          //Params參數佔位符路由
          path: 'detail/:id/:title/:content',
          component: ()=> import('@/views/NewsDetail.vue'),
          props:true
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/About.vue')
    }
  ]
})

export default router
