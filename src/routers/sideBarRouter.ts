/** When your routing table is too long, you can split it into small modules**/
const allRouter = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'home',
    redirect: '/',
    meta: {
      title: '首页',
      icon: 'House',
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/map.vue'),
        name: 'homePage',
        meta: { title: '首页面', icon: 'MenuIcon' },
      },
      {
        path: '/home/map',
        component: () => import('@/views/home/index.vue'),
        name: 'mapPage',
        meta: { title: '地理总览', icon: 'MenuIcon' },
      },
    ],
  },
  {
    path: '/other',
    component: () => import('@/layout/index.vue'),
    name: 'other',
    redirect: '/other/yunnan',
    meta: {
      title: '旅游地点',
      icon: 'Location',
    },
    children: [
      {
        path: '/other/yunnan',
        component: () => import('@/views/login/book.vue'),
        name: 'clipboard',
        meta: { title: '云南', roles: ['other'], icon: 'MenuIcon' },
        redirect: '/other/yunnan/dali',
        children: [
          {
            path: '/other/yunnan/dali',
            component: () => import('@/views/login/index.vue'),
            name: 'dali',
            meta: { title: '大理', icon: 'MenuIcon' },
          },
          {
            path: '/other/liling',
            component: () => import('@/views/errorPages/404.vue'),
            name: 'lijiang',
            meta: { title: '丽江', icon: 'MenuIcon' },
            children: [
              {
                path: '/other/lijiang/lijiangguzhen',
                component: () => import('@/views/errorPages/404.vue'),
                name: 'gucheng',
                meta: { title: '丽江古城', icon: 'MenuIcon' },
              },
              {
                path: '/other/lijiang/shuhe',
                component: () => import('@/views/errorPages/404.vue'),
                name: 'shuhe',
                meta: { title: '束河古镇', icon: 'MenuIcon' },
              },
            ]
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
    component: () => import('@/layout/index.vue'),
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
  },
]

export default allRouter
