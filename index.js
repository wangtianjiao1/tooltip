import Tooltip from './src/components/Tooltip.vue'
import Vue from 'vue'
// 标签引入
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Tooltip',Tooltip)
}
// 使用Vue.use进行全局安装
Tooltip.install = function() {
  Vue.component(Tooltip.name,Tooltip)
}
export default Tooltip