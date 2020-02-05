import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
//提取图片主色脚本
import RGBaster from './util/rgbaster.js';
Vue.use(VueAxios, axios, RGBaster)
import store from './store/index.js'
Vue.prototype.$store = store;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
