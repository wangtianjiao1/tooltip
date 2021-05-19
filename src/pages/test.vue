<template>
  <div>
    <Tooltip :content="'测试文本'" :placement="'right'">
      <div>内容文本文本文本</div>
    </Tooltip>
  </div>
</template>
<script>
import Tooltip from '@/components/Tooltip.vue'

export default {
  components: {
    Tooltip
  }
}
</script>
<style  scoped>
</style>