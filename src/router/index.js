import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "./routes/home";
import cart from './routes/cart'
import my from './routes/my'
import details from './routes/details'
import order from './routes/order'

  const routes = [
    {
      path:"/",
      redirect: "/home"
    },
    home,     // 首页
    cart,     // 购物车页
    ...my,    // 个人中心页
    details,  // 详情页
    order,    // 确认订单
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
