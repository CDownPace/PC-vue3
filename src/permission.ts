import router from './routers/index'
import allRouter from './routers/sideBarRouter'

console.log('allRouter---', allRouter)


router.beforeEach(async (to, from, next) => {

  if (localStorage.roles) {
    console.log('登录了')
    next()
  } else {
    console.log('未登录')

    allRouter.forEach((item) => router.addRoute(item))
    next({ ...to, replace: true })
    console.log('执行完毕')
    localStorage.roles = 'allRouter'
  }
})