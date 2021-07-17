import Vue from 'vue'
// import App from './App.vue'
//@是一个别名，是个小名，代表的就是我们的src路径
import App from '@/App'
Vue.config.productionTip=false


new Vue({
  el:'#app',
  render:h=>h(App)
})