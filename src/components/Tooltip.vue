<template>
  <div class="container" ref="container">
    <slot ref="header"></slot>
    <div class="tooltip-container" :style="{top: `${setTop}px`,left: `${setLeft}px`}">
      <div class="tooltip" ref="tooltip">{{content}}</div>
      <div class="angle-icon" :class="placement" :style="setAngleTips"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: { // 轻提示内容
      type: String,
      default: '',
    },
    placement: { // 放置位置top|left|right|bottom
      type: String,
      default: ''
    }
  },
  data() {
      return {
        tooltipHeight: null,
        tooltipWidth: null,
        containerHeight: null,
        containerWidth: null,
        setTop: 0,
        setLeft: 0,
        setAngleTips: {
          top: 0,
          left:0
        }
      }
  },
  mounted() {
    console.log(this.$refs.header);
    this.tooltipHeight = this.$refs.tooltip.offsetHeight
    this.tooltipWidth = this.$refs.tooltip.offsetWidth
    this.containerHeight = this.$refs.container.offsetHeight
    this.containerWidth = this.$refs.container.offsetWidth
      switch(this.placement) {
        case 'top' : this.setTop = `-${this.containerHeight+this.tooltipHeight+10}`
                    this.setAngleTips.top = `${this.tooltipHeight}px`
                    this.setAngleTips.left = `calc(${this.tooltipWidth}px / 2 - 10px)`
        break;
        case 'bottom': this.setTop = `${this.containerHeight}`
                        this.setAngleTips.top = `-10px`
                        this.setAngleTips.left = `calc(${this.tooltipWidth}px / 2 - 10px)`
        break;
        case 'left':this.setTop = `-${this.containerHeight}`
                    this.setLeft = `-${this.containerWidth + 10}`
                    this.setAngleTips.top = `calc(${this.tooltipHeight}px / 2 - 10px)`
                    this.setAngleTips.left = `${this.tooltipWidth}px`
        break;
        case 'right': this.setTop = `-${this.containerHeight}`
                      this.setLeft = `${this.containerWidth + 10}`
                      this.setAngleTips.top = `calc(${this.tooltipHeight}px / 2 - 10px)`
                      this.setAngleTips.left = `-10px`
                
      }
    console.log(`${this.setTop}`,'哈哈哈');
    console.log(this.tooltipHeight);
    console.log(this.tooltipWidth);
    console.log(this.containerHeight,this.containerWidth);
    console.log('右边的','提示容器','top：',this.setTop,'left:',this.setLeft);
  },
}
</script>
<style  scoped>
.container {
  position: absolute;
  left: 20%;
  top: 20%;
}
.container:hover .tooltip-container{
  visibility:visible;
}
.container:hover {
    cursor: pointer;
}
.tooltip-container {
  position: relative;
  width: auto;
  height: auto;
  visibility: hidden;
  top: 0px;
}
.tooltip {
  position: absolute;
  background: #000;
  color: #fff;
  width: auto;
  padding:5px 10px;
  font-size: 14px;
  opacity: 0.8;
  border-radius: 5px;
}
.angle-icon {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
}
.top {
  border-width: 10px 10px 0;
  border-color: #333333 transparent transparent;
}
.bottom {
  border-width: 0 10px 10px;
  border-color: transparent transparent #333333;
}
.right {
  border-width: 10px 10px 10px 0;
  border-color: transparent #333333 transparent transparent;
}
.left {
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent #333333;
}
</style>