import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

//const app = new Vue({
  //router
//}).$mount('#app')
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
