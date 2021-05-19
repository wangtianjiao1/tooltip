import Tooltip from './src/components/Tooltip.vue'
import _Vue from 'vue'
// 标签引入
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Tooltip',Tooltip)
}

Tooltip.install = Vue => {
if (!Vue) {
window.Vue = Vue = _Vue
}
Vue.component(Tooltip.name, Tooltip)
}
export default Tooltip;

