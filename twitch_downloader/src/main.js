import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './plugins/vuetify'
import './plugins/vuetify'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
