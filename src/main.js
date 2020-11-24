import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 公共样式
import "./assets/css/base.css"

// 字体图标
import "./assets/font/iconfont.css"

// 引入ElementUI组件库
// cnpm i element-ui -S
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入swiper
import "swiper/css/swiper.min.css";

// 引入axios
import axios from "axios";
// axios.defaults.baseURL = "http://127.0.0.1:3001/";
Vue.prototype.$axios = axios;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
