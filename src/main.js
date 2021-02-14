import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import VueDemo from './plugins/vue-demo'

Vue.config.productionTip = false
Vue.use(VueDemo)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
