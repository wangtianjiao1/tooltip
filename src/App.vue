<template>
  <div id="app">
    <Tooltip :content="'提示文本'" :placement="'right'">
      <div>提示文本</div>
    </Tooltip>
  </div>
</template>

<script>
import Tooltip from '@/components/Tooltip.vue'
import hello from '@/components/Tooltip.vue'
export default {
  name: 'app',
  components: {
    Tooltip
  },
  data () {
    return {
    }
  },
  mounted() {
    console.log(hello);
  }
}
</script>
