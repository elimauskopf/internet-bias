import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import LandingPage from './components/LandingPage.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', component: LandingPage}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router
}).$mount('#app')
