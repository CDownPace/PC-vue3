/** When your routing table is too long, you can split it into small modules**/

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const allRouter = [
  {
    path: '/other',
    component: 'aa',
    redirect: '/other/clipboard',
    name: 'other',
    meta: {
      title: '旅游地点',
      icon: Location,
    },
    children: [
      {
        path: '/other/yunnan',
        component: () => import('@/views/login/index.vue'),
        name: 'clipboard',
        meta: { title: '云南', roles: ['other'], icon: 'MenuIcon' },
        children:[
          {
            path: '/system/user',
            component: () => import('@/views/errorPages/404.vue'),
            name: 'user',
            meta: { title: '大理', icon: 'MenuIcon' },
          },
          {
            path: '/system/iling',
            component: () => import('@/views/errorPages/404.vue'),
            name: 'user',
            meta: { title: '丽江', icon: 'MenuIcon' },
          },
        ]
      },
      {
        path: '/other/editor',
        component: () => import('@/views/home/index.vue'),
        name: 'editor',
        meta: { title: '北京', roles: ['other'], icon: 'MenuIcon' },
      },
    ],
  },

  {
    path: '/system',
    component: 'bb',
    redirect: '/system/user',
    name: 'system',
    meta: {
      title: '系统管理',
      icon: 'Setting',
    },
    children: [
      {
        path: '/system/user',
        component: () => import('@/views/errorPages/404.vue'),
        name: 'user',
        meta: { title: '数值记录', icon: 'MenuIcon' },
      },
    ],
  }
]

export default allRouter
