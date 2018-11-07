import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import Butter from 'buttercms'
import App from './App'

Vue.config.productionTip = false
Vue.use(ElementUI, {
  locale
})
const butter = Butter('464a98d163b954e9ac9ee91798f56547b0e48eb4');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  butter,
  components: {
    App
  },
  template: '<App/>'
})
