import Vue from 'vue'
import App from './App.vue'
import oneTooltip from 'one-tooltip'

Vue.use(oneTooltip)
new Vue({
  el: '#app',
  render: h => h(App)
})
