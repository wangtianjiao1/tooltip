import oneTooltip from '@/components/Tooltip.vue'

const components = {
  install(Vue) {
      Vue.component('one-tooltip', oneTooltip)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(components)
}
export default components;

