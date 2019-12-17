import Vue from 'vue'
import App from './App.vue'
import router from './router'

//import LandingPage from './components/LandingPage.vue'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
