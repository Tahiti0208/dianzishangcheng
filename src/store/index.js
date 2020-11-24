import Vue from 'vue'
import Vuex from 'vuex'

import cart from "./cart"
import order from "./order"
import address from "./address"
import like from "./like"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:"" ,     // 用户名
    showAside:true,   // 侧边栏
    showTop:true,     // 顶部导航
    isShowTop:false,  // 回到顶部
    footer:true,      // 底部
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,          // 购物车
    order,         // 订单
    address,       // 地址
    like           // 收藏
  }
})
