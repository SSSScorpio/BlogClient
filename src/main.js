import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.less'
import './assets/font/iconfont.css'
require('./Mock')
import {parseTime} from './utils'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.filter('parseTime', (v) => parseTime(v,'{y}-{m}-{d}'))
window.bus = new Vue();
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  render: h => h(App)

}).$mount('#app')
