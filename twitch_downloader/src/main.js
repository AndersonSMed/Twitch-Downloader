import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
