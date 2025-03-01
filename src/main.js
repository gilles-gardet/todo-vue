import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'

// Use vuetify
Vue.use(vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify
}).$mount('#app')