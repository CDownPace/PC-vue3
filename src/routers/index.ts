import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory, Router } from 'vue-router'


interface extendRoute {
  hidden?: boolean
}
export const constantRoutes: Array<RouteRecordRaw & extendRoute> = [
  {
    path: '/404',
    name: '404',
    component: () => import('../views/errorPages/404.vue'),
    hidden: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue'),
    hidden: true,
    meta: { title: '登录' },
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/home/index.vue'),
    redirect: '/home',
    meta: { title: '首页', icon: 'House' },
    children: [
      {
        path: '/home',
        component: () => import('../views/home/index.vue'),
        name: 'home',
        meta: { title: '首页', icon: 'House', affix: true, role: ['other'] },
      },
    ],
  },
]


const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // history
  history: createWebHashHistory(), // hash
  routes: constantRoutes,
})

export default router